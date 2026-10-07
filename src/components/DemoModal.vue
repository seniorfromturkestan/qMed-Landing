<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import { useAppStore } from '../stores/appStore'

const store = useAppStore()

const DEFAULT_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzQbe5bp4JmMjrZ5FUpR7XS1hi3aDqKjT20KZMbWZPy_N6P-q3AB_z3LnqzztPDJLKjVg/exec'
const envUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || ''
const rawScriptUrl = (!envUrl || envUrl.includes('*')) ? DEFAULT_SCRIPT_URL : envUrl
const scriptUrl = rawScriptUrl.startsWith('http')
  ? rawScriptUrl
  : `https://${rawScriptUrl.replace(/^\/+/, '')}`

const tModal = computed(() => store.t.modal)
const roles = computed(() => [
  tModal.value.clinicRole || 'Клиника',
  tModal.value.patientRole || 'Пациент'
])

const form = reactive({
  role: 'Клиника',
  name: '',
  phone: '',
  context: '',
  consent: false,
})

const isSubmitting = ref(false)
const submitError = ref('')
const isSubmitted = ref(false)
const submittedData = ref<{ organization: string; role: string; phone: string; context: string } | null>(null)

function formatPhone(value: string) {
  if (!value) return ''
  const digits = value.replace(/\D/g, '')
  if (!digits) return ''

  if ((digits === '7' || digits === '8') && (value === '+' || value === '+7' || value === '8' || value.length <= 2)) {
    return ''
  }

  const normalized = digits.replace(/^8/, '7').slice(0, 11)

  let result = '+7'
  if (normalized.length > 1) {
    result += ` (${normalized.slice(1, 4)}`
  }
  if (normalized.length > 4) {
    result += `) ${normalized.slice(4, 7)}`
  }
  if (normalized.length > 7) {
    result += `-${normalized.slice(7, 9)}`
  }
  if (normalized.length > 9) {
    result += `-${normalized.slice(9, 11)}`
  }
  return result
}

function onPhoneInput(e: Event) {
  const input = e.target as HTMLInputElement
  form.phone = formatPhone(input.value)
}

async function submit() {
  if (!form.consent) {
    submitError.value = store.lang === 'KZ'
      ? 'Деректерді өңдеуге келісім беру қажет'
      : 'Необходимо дать согласие на обработку персональных данных'
    return
  }

  const digitsOnly = form.phone.replace(/\D/g, '')
  if (digitsOnly.length !== 11) {
    submitError.value = store.lang === 'KZ'
      ? 'Телефон нөмірін толық енгізіңіз (11 сан)'
      : 'Введите полный номер телефона (11 цифр)'
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  const payloadData = {
    organization: form.name.trim(),
    role: form.role,
    phone: form.phone,
    context: form.context.trim(),
  }

  const payload = new URLSearchParams({
    organization: payloadData.organization,
    role: payloadData.role,
    phone: payloadData.phone.startsWith("'") ? payloadData.phone : `'${payloadData.phone}`,
    context: payloadData.context,
    submittedAt: new Date().toISOString(),
    source: typeof window === 'undefined' ? 'landing-page' : window.location.href,
    userAgent: typeof navigator === 'undefined' ? '' : navigator.userAgent,
  })

  try {
    // 1. Отправка в Google Sheets (в фоновом режиме, mode: 'no-cors' предотвращает зависание CORS)
    if (scriptUrl) {
      fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: payload.toString(),
      }).catch((err) => console.warn('Google Sheets submit warning:', err))
    }

    // 2. Отправка в Telegram через Netlify Serverless Function
    const tgResponse = await fetch('/.netlify/functions/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadData),
    })

    if (!tgResponse.ok) {
      const errData = await tgResponse.json().catch(() => ({}))
      console.error('Telegram endpoint error:', errData)
      throw new Error(errData.error || 'Telegram submit failed')
    }

    submittedData.value = payloadData
    isSubmitted.value = true

    // Сброс полей
    form.name = ''
    form.phone = ''
    form.context = ''
    form.consent = false
  } catch (err) {
    console.error('Failed to submit lead:', err)
    submitError.value = tModal.value.error || (store.lang === 'KZ' ? 'Өтінімді жіберу мүмкін болмады. Қайталап көр.' : 'Не удалось отправить заявку. Попробуйте ещё раз.')
  } finally {
    isSubmitting.value = false
  }
}

function handleClose() {
  store.closeDemoModal()
  setTimeout(() => {
    isSubmitted.value = false
    submitError.value = ''
  }, 300)
}
</script>

<template>
  <Transition name="modal">
    <div
      v-if="store.isDemoModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-[20px] bg-black/50 backdrop-blur-xs"
      @click.self="handleClose"
    >
      <!-- Стеклянная карточка -->
      <div class="relative w-full max-w-[500px] rounded-[20px] bg-white border border-gray-200 shadow-[0_30px_80px_rgba(27,89,248,0.25)] p-[34px] overflow-hidden">

        <!-- Крестик -->
        <button
          class="absolute top-[15px] right-[15px] w-[30px] h-[30px] flex items-center justify-center text-black/50 hover:text-black transition z-10"
          aria-label="Закрыть"
          @click="handleClose"
        >
          <svg
            class="w-[20px] h-[20px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        <!-- Обычное состояние: Форма -->
        <div v-if="!isSubmitted" class="relative">
          <h2 class="text-2xl font-bold pr-[30px]">{{ tModal.title }}</h2>
          <p class="mt-[10px] text-black/60">
            {{ tModal.description }}
          </p>

          <!-- Форма -->
          <form class="mt-[25px] flex flex-col gap-[15px]" @submit.prevent="submit">
            <!-- Роль -->
            <div class="flex gap-2">
              <button
                v-for="role in roles"
                :key="role"
                type="button"
                class="flex-1 rounded-[10px] py-[10px] text-sm font-medium border transition cursor-pointer"
                :class="form.role === role || (form.role === 'Клиника' && role === tModal.clinicRole)
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white/60 text-black/70 border-gray-300/70 hover:border-primary'"
                @click="form.role = role"
              >
                {{ role }}
              </button>
            </div>

            <input
              v-model="form.name"
              type="text"
              required
              :placeholder="tModal.namePlaceholder"
              class="w-full bg-white/60 border border-gray-300/70 rounded-[10px] px-[15px] py-[12px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
            <input
              v-model="form.phone"
              type="tel"
              required
              :placeholder="tModal.phonePlaceholder"
              class="w-full bg-white/60 border border-gray-300/70 rounded-[10px] px-[15px] py-[12px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              @input="onPhoneInput"
            />
            <textarea
              v-model="form.context"
              rows="3"
              :placeholder="tModal.contextPlaceholder"
              class="w-full bg-white/60 border border-gray-300/70 rounded-[10px] px-[15px] py-[12px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
            />

            <!-- Чекбокс согласия на обработку ПД -->
            <label class="flex items-start gap-3 mt-1 cursor-pointer select-none text-xs text-gray-600 hover:text-gray-900 transition">
              <input
                v-model="form.consent"
                type="checkbox"
                required
                class="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/30 accent-primary cursor-pointer transition shrink-0"
              />
              <span class="leading-relaxed">
                {{ tModal.consentText }}
              </span>
            </label>

            <!-- Сообщение об ошибке -->
            <p v-if="submitError" class="text-red-500 text-sm font-medium">
              {{ submitError }}
            </p>

            <button
              type="submit"
              :disabled="isSubmitting || !form.consent"
              class="btn-glow mt-[5px] text-white rounded-[30px] py-[14px] font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>{{ isSubmitting ? tModal.submitting : tModal.submitBtn }}</span>
            </button>
          </form>
        </div>

        <!-- Успешное состояние: Модалка благодарности с подтверждением -->
        <div v-else class="relative text-center py-2 flex flex-col items-center">
          <div class="w-16 h-16 bg-emerald-100/80 rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            {{ tModal.successTitle || (store.lang === 'KZ' ? 'Өтінім қабылданды!' : 'Заявка принята!') }}
          </h2>
          <p class="text-gray-600 text-sm mb-6 leading-relaxed max-w-sm">
            {{ tModal.successSubtitle || (store.lang === 'KZ' ? 'Өтінішіңізге рақмет. Менеджеріміз жақын арада сізбен хабарласады.' : 'Спасибо за обращение. Наш менеджер свяжется с вами в ближайшее время.') }}
          </p>

          <!-- Карточка с деталями заявки -->
          <div v-if="submittedData" class="w-full bg-gray-50/80 border border-gray-200/80 rounded-2xl p-4 text-left text-sm flex flex-col gap-2.5 mb-6">
            <p class="font-semibold text-gray-700 text-xs uppercase tracking-wider mb-1 border-b border-gray-200/80 pb-2">
              {{ tModal.detailsTitle || (store.lang === 'KZ' ? 'Өтінім мәліметтері:' : 'Детали заявки:') }}
            </p>
            <div class="flex justify-between items-center gap-2">
              <span class="text-gray-500 font-medium">{{ tModal.organizationLabel || (store.lang === 'KZ' ? 'Ұйым' : 'Организация') }}:</span>
              <span class="font-semibold text-gray-900 text-right">{{ submittedData.organization }}</span>
            </div>
            <div class="flex justify-between items-center gap-2">
              <span class="text-gray-500 font-medium">{{ tModal.roleLabel || (store.lang === 'KZ' ? 'Рөлі' : 'Роль') }}:</span>
              <span class="font-semibold text-gray-900 text-right">{{ submittedData.role }}</span>
            </div>
            <div class="flex justify-between items-center gap-2">
              <span class="text-gray-500 font-medium">{{ tModal.phoneLabel || (store.lang === 'KZ' ? 'Телефон' : 'Телефон') }}:</span>
              <span class="font-semibold text-gray-900 text-right">{{ submittedData.phone }}</span>
            </div>
            <div v-if="submittedData.context" class="flex flex-col gap-1 mt-1 border-t border-gray-200/80 pt-2">
              <span class="text-gray-500 font-medium">{{ tModal.contextLabel || (store.lang === 'KZ' ? 'Сұраным' : 'Запрос') }}:</span>
              <span class="font-normal text-gray-800 italic bg-white/70 rounded-lg p-2 border border-gray-200/50">«{{ submittedData.context }}»</span>
            </div>
          </div>

          <button
            class="btn-glow w-full text-white rounded-[30px] py-[14px] font-medium transition cursor-pointer"
            @click="handleClose"
          >
            {{ tModal.closeBtn || (store.lang === 'KZ' ? 'Түсінікті, жабу' : 'Понятно, закрыть') }}
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Плавное появление/затухание модалки */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Лёгкий зум карточки */
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.25s ease;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}
</style>
