<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Ширина полосы прогресса в процентах (0–100)
const progress = ref(0)
let ticking = false

function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight
  progress.value = height > 0 ? (scrollTop / height) * 100 : 0
  ticking = false
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateProgress)
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateProgress)
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateProgress)
})
</script>

<template>
  <!-- Показывается только на десктопах (hidden на мобильных, чтобы не дергать хедер и не создавать лишних линий) -->
  <div
    class="hidden md:block fixed top-0 left-0 h-[3px] bg-primary z-50 transition-[width] duration-75 ease-out pointer-events-none"
    :style="{ width: progress + '%' }"
  />
</template>
