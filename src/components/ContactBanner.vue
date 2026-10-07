<script setup lang="ts">
import { useAppStore } from '../stores/appStore'

const store = useAppStore()
</script>

<template>
  <section>
    <!-- Премиальный градиентный баннер-карта -->
    <div
      v-reveal
      class="reveal relative overflow-hidden bg-gradient-to-br from-primary to-[#3b74ff]"
    >


      <button
        class="relative w-full flex flex-col md:flex-row items-center justify-center gap-[15px] text-center px-8 py-10 group"
        @click="store.openDemoModal"
      >
        <span class="text-2xl md:text-4xl font-bold text-white">
          {{ store.t.contactBanner.title }}
        </span>

        <!-- Иконка стрелки вправо -->
        <span class="shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2">
          <svg
            class="w-6 h-6 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </button>
    </div>
  </section>
</template>
