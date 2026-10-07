<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAppStore } from '../stores/appStore'

const store = useAppStore()
const containerRef = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)

const stats = ref([
  { id: 1, end: 92, suffix: '%', current: 0, decimals: 0 },
  { id: 2, end: 3.4, suffix: 'x', current: 0, decimals: 1 },
  { id: 3, end: 48, suffix: '%', current: 0, decimals: 0 },
  { id: 4, end: 24, end2: 7, separator: '/', current: 0, current2: 0, decimals: 0 }
])

function animate() {
  const duration = 1800
  const startTime = performance.now()
  
  function update(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeProgress = progress * (2 - progress) // easeOutQuad
    
    stats.value.forEach(stat => {
      stat.current = stat.end * easeProgress
      if ('end2' in stat && stat.current2 !== undefined) {
        stat.current2 = stat.end2 * easeProgress
      }
    })
    
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      stats.value.forEach(stat => {
        stat.current = stat.end
        if ('end2' in stat) {
          stat.current2 = stat.end2
        }
      })
    }
  }
  
  requestAnimationFrame(update)
}

function getStatLabel(id: number) {
  if (id === 1) return store.t.stats.item1
  if (id === 2) return store.t.stats.item2
  if (id === 3) return store.t.stats.item3
  return store.t.stats.item4
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true
      animate()
      observer.disconnect()
    }
  }, {
    threshold: 0.15
  })
  
  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
})
</script>

<template>
  <section ref="containerRef" class="relative overflow-hidden bg-gradient-to-br from-primary to-[#3b74ff]">
    <div class="relative z-10 max-w-[1200px] mx-auto px-5 py-20 md:py-32">
      <h2 class="text-3xl md:text-5xl font-bold text-center text-white mb-4">
        {{ store.t.stats.title }}
      </h2>
      <p class="text-center text-white/70 max-w-2xl mx-auto mb-16">
        {{ store.t.stats.description }}
      </p>

      <!-- Сетка карточек -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="p-10 rounded-3xl bg-white/15 border border-white/20 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/25"
        >
          <p class="text-white text-4xl md:text-5xl font-bold mb-2">
            <template v-if="'separator' in stat">
              {{ Math.floor(stat.current) }}{{ stat.separator }}{{ Math.floor(stat.current2 ?? 0) }}
            </template>
            <template v-else>
              {{ stat.current.toFixed(stat.decimals) }}{{ stat.suffix }}
            </template>
          </p>
          <p class="text-white/70 text-sm md:text-base font-medium">
            {{ getStatLabel(stat.id) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
