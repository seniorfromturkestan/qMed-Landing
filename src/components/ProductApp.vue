<script setup lang="ts">
// Заглушки экранов приложения
const phones = [
  'Главная',
  'Запись к врачу',
  'Результаты анализов',
  'Телемедицина',
  'История болезни',
  'Рецепты',
  'Оплата',
  'Профиль',
]

// Дублируем массив для бесшовной ленты (сдвиг на -50%)
const track = [...phones, ...phones]
</script>

<template>
  <section class="relative overflow-hidden bg-[#f7f9ff]">


    <!-- Верхняя часть: контент -->
    <div class="relative max-w-[1200px] mx-auto px-5 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <!-- Левая колонка -->
        <div v-reveal class="reveal">
          <h2 class="text-5xl md:text-7xl font-bold tracking-tight leading-none">
            Qmed <span class="text-primary">App</span>
          </h2>

          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              class="bg-black text-white px-6 py-2.5 rounded-[14px] flex items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.20)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.98-.75.83-1.98 1.47-3.02 1.39-.13-1.1.42-2.27 1.09-3 .74-.81 2.05-1.42 3.05-1.37zM20.9 17.2c-.55 1.27-.82 1.84-1.53 2.97-.99 1.57-2.39 3.53-4.12 3.54-1.54.01-1.94-1-4.03-.99-2.09.01-2.53 1.01-4.07.99-1.73-.02-3.06-1.78-4.05-3.35-2.77-4.4-3.06-9.56-1.35-12.3 1.21-1.94 3.13-3.08 4.93-3.08 1.84 0 3 1.01 4.52 1.01 1.48 0 2.38-1.01 4.52-1.01 1.62 0 3.34.88 4.56 2.4-4.01 2.2-3.36 7.93.62 9.82z" />
              </svg>
              <span class="text-sm font-medium">App Store</span>
            </a>

            <a
              href="#"
              class="bg-black text-white px-6 py-2.5 rounded-[14px] flex items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.20)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.6 2.4c-.25.26-.4.66-.4 1.18v16.84c0 .52.15.92.4 1.18l.06.05L13 12.06v-.12L3.66 2.35l-.06.05zM17.7 15.3l-3.1-3.1v-.4l3.1-3.1.07.04 3.67 2.08c1.05.6 1.05 1.57 0 2.17l-3.67 2.08-.07.03zM14.6 12.06l3.2 3.2-9.4 5.3c-.35.2-.68.18-.93-.02l7.13-8.48zM7.47 3.46c-.25-.2.58-.22.93-.02l9.4 5.3-3.2 3.2L7.47 3.46z" />
              </svg>
              <span class="text-sm font-medium">Google Play</span>
            </a>
          </div>
        </div>

        <!-- Правая колонка -->
        <div v-reveal="150" class="reveal">
          <p class="text-lg text-black/60 leading-relaxed">
            Универсальное пространство для пациентов: запись к врачу, результаты анализов,
            телемедицинские консультации, электронные рецепты и вся история болезни — в вашем
            смартфоне. Qmed App делает заботу о здоровье простой и доступной 24/7.
          </p>
        </div>
      </div>
    </div>

    <!-- Нижняя часть: бесконечная лента парящих смартфонов -->
    <div class="relative w-full overflow-x-auto scrollbar-none pt-4 pb-16">
      <div class="phones-track flex gap-8 w-max px-4">
        <div
          v-for="(screen, i) in track"
          :key="i"
          class="w-[220px] h-[450px] md:w-[260px] md:h-[550px] bg-white border-[10px] border-gray-900 rounded-[40px] shadow-[0_30px_60px_rgba(27,89,248,0.18)] flex-shrink-0 relative overflow-hidden"
          aria-hidden="true"
        >
          <!-- Вырез камеры (notch) -->
          <div class="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />
          <!-- Экран -->
          <div class="absolute inset-0 bg-gradient-to-b from-[#eef3ff] to-[#f7f9ff] flex items-center justify-center text-primary/50 text-sm font-medium">
            {{ screen }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Бесконечное движение ленты телефонов */
.phones-track {
  animation: scroll-phones 40s linear infinite;
  will-change: transform;
}
@keyframes scroll-phones {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
.phones-track:hover {
  animation-play-state: paused;
}
</style>
