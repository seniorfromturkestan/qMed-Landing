<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '../stores/appStore'

const store = useAppStore()
const isModalOpen = ref(false)

function openModal() {
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}
</script>

<template>
  <section class="relative overflow-hidden bg-white">
    <!-- Контейнер-карта с видео -->
    <div
      v-reveal
      class="reveal relative mx-auto h-[400px] md:h-[600px] overflow-hidden"
    >
      <!-- Фоновое изображение-превью из YouTube -->
      <img
        src="https://img.youtube.com/vi/54FANsK6Lww/maxresdefault.jpg"
        alt="qMed Video Cover"
        class="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90"
        loading="lazy"
      />

      <!-- Градиентный оверлей -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />

      <!-- Контент внизу -->
      <div class="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
        <div class="flex justify-between items-end gap-6">
          <h2 class="text-white text-2xl md:text-4xl font-bold max-w-[60%] leading-tight">
            {{ store.t.promo.title }}
          </h2>

          <!-- Стеклянная премиальная кнопка Play -->
          <button
            class="shrink-0 relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full group cursor-pointer transition-all duration-300 focus:outline-none"
            :aria-label="store.t.promo.watchButton"
            @click="openModal"
          >
            <!-- Внешнее стеклянное кольцо -->
            <div class="absolute inset-0 bg-white/15 backdrop-blur-md border border-white/25 rounded-full scale-100 group-hover:scale-110 group-hover:bg-white/25 transition-all duration-500 ease-out shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
            
            <!-- Внутренний сплошной круг с иконкой -->
            <div class="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
              <svg
                class="w-5 h-5 md:w-6 md:h-6 text-primary transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Модальное окно с YouTube видео -->
    <Transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        @click.self="closeModal"
      >
        <div class="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
          <!-- Кнопка закрытия -->
          <button
            class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition"
            aria-label="Закрыть видео"
            @click="closeModal"
          >
            <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <!-- YouTube Iframe -->
          <iframe
            v-if="isModalOpen"
            class="w-full h-full"
            src="https://www.youtube.com/embed/54FANsK6Lww?autoplay=1"
            title="qMed AI Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
/* Анимация появления модального окна */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
