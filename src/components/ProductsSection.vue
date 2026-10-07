<script setup lang="ts">
// Экосистема: чередующиеся блоки текст / видео.
import { ref, nextTick } from 'vue'
import { useAppStore } from '../stores/appStore'
import platformVideo from '../assets/desktop-video.mp4'
import myapp1 from '../assets/my-app-1.mp4'
import platform1 from '../assets/my-platform-1.mp4'
import myapp2 from '../assets/my-app-2.mp4'

const store = useAppStore()

// Платформа для врача: последовательное воспроизведение видео
const doctorVideos = [platform1, platformVideo]
const doctorVideoIndex = ref(0)
const doctorVideoRef = ref<HTMLVideoElement | null>(null)

function onDoctorVideoEnded() {
  doctorVideoIndex.value = (doctorVideoIndex.value + 1) % doctorVideos.length
  nextTick(() => {
    if (doctorVideoRef.value) {
      doctorVideoRef.value.load()
      doctorVideoRef.value.play().catch(() => {})
    }
  })
}

// Приложение для пациента: последовательное воспроизведение видео
const patientVideos = [myapp2, myapp1]
const patientVideoIndex = ref(0)
const patientVideoRef = ref<HTMLVideoElement | null>(null)

function onPatientVideoEnded() {
  patientVideoIndex.value = (patientVideoIndex.value + 1) % patientVideos.length
  nextTick(() => {
    if (patientVideoRef.value) {
      patientVideoRef.value.load()
      patientVideoRef.value.play().catch(() => {})
    }
  })
}

// Модальное окно увеличения видео
const isVideoModalOpen = ref(false)
const modalVideoSrc = ref('')
const isModalVertical = ref(false)

function openDoctorVideoModal() {
  modalVideoSrc.value = doctorVideos[doctorVideoIndex.value]
  isModalVertical.value = false
  isVideoModalOpen.value = true
}

function openPatientVideoModal() {
  modalVideoSrc.value = patientVideos[patientVideoIndex.value]
  isModalVertical.value = true
  isVideoModalOpen.value = true
}

function closeVideoModal() {
  isVideoModalOpen.value = false
  modalVideoSrc.value = ''
}
</script>

<template>
  <section id="features" class="relative overflow-hidden bg-white scroll-mt-[70px]">
    <div class="relative z-10 max-w-container mx-auto px-[20px] py-[90px] flex flex-col gap-[90px]">

      <!-- Блок 1: Платформа для врача (горизонтальное видео) -->
      <div class="flex flex-col md:flex-row items-center gap-[50px]">
        <div v-reveal class="reveal w-full md:w-[45%] lg:w-[40%]">
          <h3 class="text-3xl md:text-4xl font-bold">
            {{ store.t.products.doctorTitle }}<span class="text-primary">{{ store.t.products.doctorSpan }}</span>
          </h3>
          <p class="mt-[20px] text-lg text-black/60 leading-relaxed">
            {{ store.t.products.doctorText }}
          </p>
          <button
            class="btn-glow mt-[30px] text-white rounded-btn px-[30px] py-[12px] font-medium"
            @click="store.openDemoModal"
          >
            {{ store.t.products.doctorBtn }}
          </button>
        </div>

        <!-- Видео-контейнер (горизонтальное) с кликом для увеличения -->
        <div v-reveal="150" class="reveal w-full md:w-[55%] lg:w-[60%]">
          <div
            class="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary/15 bg-black cursor-pointer group"
            @click="openDoctorVideoModal"
          >
            <video
              ref="doctorVideoRef"
              class="w-full h-full object-cover rounded-3xl smooth-video"
              :src="doctorVideos[doctorVideoIndex]"
              autoplay
              muted
              playsinline
              @ended="onDoctorVideoEnded"
            />

            <!-- Оверлей клика для увеличения -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div class="bg-white/20 backdrop-blur-md text-white rounded-full px-5 py-2.5 flex items-center gap-2 font-medium border border-white/30 shadow-lg transform group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ store.lang === 'KZ' ? 'Үлкейту' : 'Увеличить' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Блок 2: Приложение для пациента (вертикальное видео) -->
      <div id="patient-app" class="flex flex-col md:flex-row-reverse items-center gap-[50px] scroll-mt-[90px]">
        <div v-reveal class="reveal w-full md:w-[55%] lg:w-[60%]">
          <h3 class="text-3xl md:text-4xl font-bold">
            {{ store.t.products.patientTitle }}<span class="text-primary">{{ store.t.products.patientSpan }}</span>
          </h3>
          <p class="mt-[20px] text-lg text-black/60 leading-relaxed">
            {{ store.t.products.patientText }}
          </p>

          <!-- Кнопки скачивания с картинками-бейждами (место под ссылки) -->
          <div class="mt-[30px] flex flex-wrap gap-4 items-center">
            <!-- App Store -->
            <a
              href="https://apps.apple.com/kz/app/qmed-ai/id6760441163"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Скачать qMed AI в App Store"
              class="inline-block transition duration-300 hover:opacity-85"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" class="h-10 w-auto object-contain" />
            </a>

            <!-- Google Play -->
            <a
              href="https://play.google.com/store/apps/details?id=com.qmed.patient"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Скачать qMed AI в Google Play"
              class="inline-block transition duration-300 hover:opacity-85"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="h-10 w-auto object-contain" />
            </a>

            <!-- AppGallery -->
            <a
              href="https://appgallery.huawei.com/app/C117401695"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Скачать qMed AI в AppGallery"
              class="inline-block transition duration-300 hover:opacity-85"
            >
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/campaign/emui91/images/Badge-Black.png" alt="AppGallery" class="h-10 w-auto object-contain" />
            </a>
          </div>
        </div>

        <!-- Видео-контейнер (вертикальный) с кликом для увеличения -->
        <div v-reveal="150" class="reveal w-full md:w-[45%] lg:w-[40%] flex justify-center">
          <div
            class="relative w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl shadow-primary/15 bg-black cursor-pointer group"
            @click="openPatientVideoModal"
          >
            <video
              ref="patientVideoRef"
              class="w-full h-full object-cover rounded-3xl smooth-video"
              :src="patientVideos[patientVideoIndex]"
              autoplay
              muted
              playsinline
              @ended="onPatientVideoEnded"
            />

            <!-- Оверлей клика для увеличения -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div class="bg-white/20 backdrop-blur-md text-white rounded-full px-5 py-2.5 flex items-center gap-2 font-medium border border-white/30 shadow-lg transform group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ store.lang === 'KZ' ? 'Үлкейту' : 'Увеличить' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Модалка увеличения видео -->
    <Transition name="modal">
      <div
        v-if="isVideoModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
        @click.self="closeVideoModal"
      >
        <div class="relative w-full max-w-[1200px] flex flex-col items-center justify-center">
          <!-- Кнопка закрытия -->
          <button
            class="absolute -top-12 right-2 md:right-0 text-white/80 hover:text-white transition p-2 cursor-pointer z-50 flex items-center gap-1.5 font-medium"
            aria-label="Закрыть"
            @click="closeVideoModal"
          >
            <span>{{ store.lang === 'KZ' ? 'Жабу' : 'Закрыть' }}</span>
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <!-- Видеоконтейнер -->
          <div
            class="relative overflow-hidden rounded-2xl shadow-2xl bg-black border border-white/10 flex items-center justify-center"
            :class="isModalVertical ? 'max-w-[420px] w-full aspect-[9/16] max-h-[85vh]' : 'max-w-[1100px] w-full aspect-video max-h-[85vh]'"
          >
            <video
              class="w-full h-full object-contain rounded-2xl"
              :src="modalVideoSrc"
              autoplay
              controls
              playsinline
            />
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.smooth-video {
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
