<script setup lang="ts">
// Блок основателя — доверие + SEO (цитата с ключевыми смыслами).
import { ref, computed, watch, onMounted } from 'vue'
import { useAppStore } from '../stores/appStore'

const store = useAppStore()
const quoteContainer = ref<HTMLElement | null>(null)
const displayedText = ref('')
const hasStarted = ref(false)

const fullText = computed(() => store.t.founder.quote)
let typewriterTimeout: ReturnType<typeof setTimeout> | undefined

function startTypewriter() {
  if (typewriterTimeout) clearTimeout(typewriterTimeout)
  displayedText.value = ''
  let index = 0
  const speed = 25
  
  function type() {
    if (index < fullText.value.length) {
      displayedText.value += fullText.value.charAt(index)
      index++
      typewriterTimeout = setTimeout(type, speed)
    }
  }
  
  type()
}

watch(() => store.lang, () => {
  if (hasStarted.value) {
    startTypewriter()
  }
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting && !hasStarted.value) {
      hasStarted.value = true
      startTypewriter()
      observer.disconnect()
    }
  }, {
    threshold: 0.15
  })
  
  if (quoteContainer.value) {
    observer.observe(quoteContainer.value)
  }
})
</script>

<template>
  <section class="relative overflow-hidden bg-white">

    <div class="relative max-w-[1200px] mx-auto px-5 py-[70px]">
      <div
        v-reveal
        class="reveal grid grid-cols-1 md:grid-cols-2   gap-0 rounded-[24px] overflow-hidden shadow-[0_30px_70px_rgba(27,89,248,0.15)]"
      >
        <!-- Левая колонка: фото руководителя -->
        <div class="h-[450px]">
          <img
            src="../assets/Nurlan-Biimbet.JPG"
            alt="Основатель qMed AI"
            class="object-cover object-[center_35%] w-full h-full"
          />
        </div>

        <!-- Правая колонка: стеклянный текст -->
        <div ref="quoteContainer" class="bg-white border-l border-gray-200 p-6 md:p-10 flex flex-col justify-center text-left">
          <h3 class="text-2xl font-bold">{{ store.t.founder.name }}</h3>
          <p class="mt-[5px] text-primary font-medium">{{ store.t.founder.title }}</p>

          <!-- Разделитель -->
          <div class="w-12 h-[3px] bg-primary rounded-full my-6" />

          <!-- Цитата (SEO) -->
          <blockquote class="text-lg leading-relaxed text-black/80 min-h-[90px]">
            <span>{{ displayedText }}</span>
            <span v-if="displayedText.length < fullText.length" class="inline-block w-1 h-4 bg-primary ml-1 animate-pulse" />
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
