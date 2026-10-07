<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '../stores/appStore'

const store = useAppStore()

// Слова для эффекта печатной машинки
const words = computed(() => store.t.hero.words)

const typed = ref('')
let wordIndex = 0
let charIndex = 0
let isDeleting = false
let timer: ReturnType<typeof setTimeout> | undefined

const TYPE_SPEED = 120
const DELETE_SPEED = 60
const PAUSE_AFTER_TYPE = 1800
const PAUSE_AFTER_DELETE = 400

function tick() {
  const currentList = words.value
  const current = currentList[wordIndex % currentList.length] || ''
  if (!isDeleting) {
    charIndex++
    typed.value = current.slice(0, charIndex)
    if (charIndex >= current.length) {
      isDeleting = true
      timer = setTimeout(tick, PAUSE_AFTER_TYPE)
      return
    }
    timer = setTimeout(tick, TYPE_SPEED)
  } else {
    charIndex--
    typed.value = current.slice(0, charIndex)
    if (charIndex <= 0) {
      isDeleting = false
      wordIndex = (wordIndex + 1) % currentList.length
      timer = setTimeout(tick, PAUSE_AFTER_DELETE)
      return
    }
    timer = setTimeout(tick, DELETE_SPEED)
  }
}

const patientCount = ref(0)
const heroStatRef = ref<HTMLElement | null>(null)
const heroHasAnimated = ref(false)

function animatePatientCount() {
  const duration = 1800
  const startTime = performance.now()
  const target = 10000
  
  function update(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeProgress = progress * (2 - progress) // easeOutQuad
    
    patientCount.value = Math.floor(target * easeProgress)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      patientCount.value = target
    }
  }
  requestAnimationFrame(update)
}

function scrollToApp() {
  const el = document.getElementById('patient-app')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  timer = setTimeout(tick, TYPE_SPEED)
  
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting && !heroHasAnimated.value) {
      heroHasAnimated.value = true
      animatePatientCount()
      observer.disconnect()
    }
  }, {
    threshold: 0.1
  })
  
  if (heroStatRef.value) {
    observer.observe(heroStatRef.value)
  }
})
onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <section class="relative overflow-hidden bg-white">
    <div class="relative max-w-container mx-auto px-[20px] pt-[80px] pb-[60px]">

      <!-- Гигантский заголовок — выравнивание влево -->
      <h1 v-reveal class="reveal min-h-[2em] sm:min-h-0 text-[clamp(2.75rem,14vw,3.75rem)] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
        <span class="block font-bold text-black sm:inline">qMed</span>
        <span class="block whitespace-nowrap font-bold sm:ml-4 sm:inline">
          <span class="text-primary">{{ typed }}</span><span class="cursor text-primary">|</span>
        </span>
      </h1>

      <!-- Описание -->
      <div v-reveal="120" class="reveal mt-8 max-w-2xl">
        <p class="text-primary font-semibold text-xl md:text-2xl">
          {{ store.t.hero.subtitle }}
        </p>
        <p class="mt-3 text-black/70 text-lg md:text-xl leading-relaxed">
          {{ store.t.hero.description }}
        </p>
      </div>

      <!-- Кнопки — как в Platonus: залитая + обводка -->
      <div v-reveal="220" class="reveal mt-10 flex flex-col sm:flex-row gap-4">
        <button
          class="btn-glow text-white rounded-full px-8 py-3.5 font-medium text-base cursor-pointer"
          @click="scrollToApp"
        >
          {{ store.t.hero.downloadApp }}
        </button>
        <button
          class="rounded-full px-8 py-3.5 font-medium text-base border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          @click="store.openDemoModal"
        >
          {{ store.t.hero.requestDemo }}
        </button>
      </div>

      <!-- Большая статистика -->
      <div ref="heroStatRef" v-reveal="320" class="reveal mt-16 flex items-end justify-between gap-4 sm:justify-start md:items-center md:flex-wrap">
        <div class="min-w-0 text-4xl md:text-6xl font-bold tracking-tight text-black leading-none flex flex-col items-start gap-2 md:flex-row md:items-baseline md:flex-wrap">
          <span class="tabular-nums inline-block min-w-[105px] md:min-w-[185px]">
            {{ patientCount.toLocaleString(store.lang === 'KZ' ? 'kk-KZ' : 'ru-RU') }}+
          </span>
          <span class="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight text-black">{{ store.t.hero.patientsCount }}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 md:w-16 md:h-16 text-primary shrink-0 inline-block align-middle">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" x2="9.01" y1="9" y2="9" />
          <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
      </div>

    </div>

    <!-- Партнёры / доверие -->
    <div v-reveal="400" class="reveal bg-[#F7F7F7]">
      <div class="partners-scroll max-w-container mx-auto overflow-hidden">
        <div class="partners-track flex w-max items-center lg:mx-auto">
          <div
            v-for="copy in 2"
            :key="copy"
            class="partners-group flex shrink-0 items-center gap-7 pr-7 lg:gap-5 lg:pr-0"
            :class="{ 'lg:hidden': copy === 2 }"
            :aria-hidden="copy === 2 ? 'true' : undefined"
          >

            <!-- Президентский грант -->
            <div class="flex items-center gap-1.5 shrink-0">
              <img src="../assets/image.png" alt="Президентский грант" class="h-10 md:h-12 w-auto object-contain" />
              <span class="text-xs md:text-sm font-medium text-black/70 max-w-[120px] leading-tight shrink-0">{{ store.t.hero.grants.presidential }}</span>
            </div>

            <div class="hidden md:block w-px h-8 bg-black/10 shrink-0" />

        <!-- Министерство здравоохранения -->
            <div class="flex items-center gap-1.5 shrink-0">
              <img src="https://www.gov.kz/uploads/2019/1/21/3c771133a679a2ed344769517f3667a9_original.62095.png" alt="Министерство здравоохранения РК" class="h-10 md:h-12 w-auto object-contain" />
              <span class="text-xs md:text-sm font-medium text-black/70 min-w-[150px] md:min-w-[175px] max-w-[190px] leading-tight shrink-0">{{ store.t.hero.grants.healthMinistry }}</span>
            </div>

            <div class="hidden md:block w-px h-8 bg-black/10 shrink-0" />

        <!-- Ассоциация кардиологов -->
            <div class="flex items-center gap-1.5 shrink-0">
              <img src="https://cardio-assoc.kz/favicons/android-icon-192x192.png" alt="Ассоциация кардиологов РК" class="h-10 md:h-12 w-auto object-contain" />
              <span class="text-xs md:text-sm font-medium text-black/70 min-w-[130px] md:min-w-[150px] max-w-[160px] leading-tight shrink-0">{{ store.t.hero.grants.cardioAssoc }}</span>
            </div>

            <div class="hidden md:block w-px h-8 bg-black/10 shrink-0" />

        <!-- Мединститут Асфендиярова -->
            <div class="flex items-center gap-1.5 shrink-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9A%D0%B0%D0%B7%D0%9D%D0%9C%D0%A3.png" alt="КазНМУ им. Асфендиярова" class="h-10 md:h-12 w-auto object-contain" />
              <span class="text-xs md:text-sm font-medium text-black/70 min-w-[120px] md:min-w-[140px] max-w-[150px] leading-tight shrink-0">{{ store.t.hero.grants.asfendiyarov }}</span>
            </div>

            <div class="hidden md:block w-px h-8 bg-black/10 shrink-0" />

        <!-- Astana Hub -->
            <img src="https://framerusercontent.com/images/tXX47nIDpfWdyumwRLTnBucnlw.png?scale-down-to=512" alt="Astana Hub" class="h-16 md:h-20 lg:h-20 w-auto object-contain shrink-0" />

          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.cursor {
  animation: blink 1s step-end infinite;
}
.partners-scroll {
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.partners-scroll::-webkit-scrollbar {
  display: none;
}
.partners-track {
  will-change: transform;
}
@media (max-width: 1023px) {
  .partners-track {
    animation: partners-marquee 22s linear infinite;
  }
}
@keyframes partners-marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
