exports.handler = async (event, context) => {
  // CORS заголовки
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Обработка preflight CORS запроса
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Successful preflight' }),
    };
  }

  // Принимаем только POST запросы
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    let data = {};
    if (event.body) {
      try {
        data = JSON.parse(event.body);
      } catch (e) {
        // Запасной вариант для application/x-www-form-urlencoded
        const params = new URLSearchParams(event.body);
        data = Object.fromEntries(params.entries());
      }
    }

    const { organization, phone, context: userContext, role } = data;

    if (!phone) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Поле "phone" обязательно для заполнения' }),
      };
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variables.');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Переменные окружения Telegram не настроены' }),
      };
    }

    // Формирование сообщения с разметкой Markdown
    const messageLines = [
      '📥 *Новая заявка с сайта qMed AI*',
      '',
      `🏢 *Организация / Имя:* ${organization || 'Не указано'}`,
      role ? `👤 *Роль:* ${role}` : null,
      `📞 *Телефон:* \`${phone}\``,
      `📝 *Суть заявки:* ${userContext || 'Не указано'}`,
      `📅 *Дата:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' })}`,
    ].filter(Boolean);

    const messageText = messageLines.join('\n');

    let targetChatId = chatId;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    let response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: targetChatId,
        text: messageText,
        parse_mode: 'Markdown',
      }),
    });

    let telegramResult = await response.json();

    // Если группа была обновлена до супергруппы, автоматически повторить отправку на новый ID
    if (!telegramResult.ok && telegramResult.parameters && telegramResult.parameters.migrate_to_chat_id) {
      targetChatId = telegramResult.parameters.migrate_to_chat_id;
      console.log(`Telegram chat migrated to supergroup ID ${targetChatId}. Retrying sending message...`);

      response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: targetChatId,
          text: messageText,
          parse_mode: 'Markdown',
        }),
      });
      telegramResult = await response.json();
    }

    if (!response.ok || !telegramResult.ok) {
      console.error('Telegram API Error:', telegramResult);
      return {
        statusCode: response.status || 500,
        headers,
        body: JSON.stringify({
          error: 'Ошибка отправки сообщения в Telegram API',
          details: telegramResult.description || 'Unknown Telegram API error',
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Заявка успешно отправлена в Telegram',
      }),
    };
  } catch (err) {
    console.error('Netlify Function Error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Внутренняя ошибка сервера Netlify Function',
        details: err.message,
      }),
    };
  }
};
