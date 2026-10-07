<script setup lang="ts">
// Скриншоты платформы (заглушки)
const screens = [
  { id: 1, label: 'Электронные медкарты' },
  { id: 2, label: 'Расписание и запись' },
  { id: 3, label: 'Аналитика и отчёты' },
  { id: 4, label: 'Документооборот' },
]
</script>

<template>
  <section class="relative overflow-hidden bg-[#f7f9ff]">


    <!-- Верхняя часть: контент -->
    <div class="relative max-w-[1200px] mx-auto px-5 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <!-- Левая колонка: заголовок -->
        <h2 v-reveal class="reveal text-5xl md:text-7xl font-bold tracking-tight leading-none">
          Qmed <span class="text-primary">Platform</span>
        </h2>

        <!-- Правая колонка: описание + кнопка -->
        <div v-reveal="150" class="reveal">
          <p class="text-lg text-black/60 leading-relaxed">
            Лучшая медицинская информационная система для управления клиникой:
            электронные карты пациентов, расписание врачей, онлайн-запись, финансовая
            аналитика и документооборот — всё в едином рабочем пространстве. Qmed Platform
            автоматизирует рутину и помогает клинике расти.
          </p>
          <a
            href="#platform"
            class="btn-glow text-white rounded-[30px] px-8 py-3 mt-6 inline-block font-medium"
          >
            Подробнее о платформе
          </a>
        </div>
      </div>
    </div>

    <!-- Нижняя часть: слайдер десктопов (на всю ширину) -->
    <div class="relative w-full">
      <div class="slider flex gap-6 overflow-x-auto snap-x px-5 pb-14">
        <div
          v-for="screen in screens"
          :key="screen.id"
          class="min-w-[80vw] md:min-w-[800px] aspect-[16/9] rounded-[18px] snap-center flex flex-col items-center justify-center gap-3 text-primary/40 bg-white border border-gray-200 shadow-[0_25px_60px_rgba(27,89,248,0.15)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(27,89,248,0.25)]"
        >
          <!-- Иконка монитора -->
          <svg
            class="w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <span class="text-sm">{{ screen.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Скрыть полосу прокрутки */
.slider {
  scrollbar-width: none;      /* Firefox */
  -ms-overflow-style: none;   /* IE/Edge */
}
.slider::-webkit-scrollbar {
  display: none;              /* Chrome/Safari */
}
</style>
