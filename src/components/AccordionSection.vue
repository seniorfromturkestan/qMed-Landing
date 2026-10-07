<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAppStore } from '../stores/appStore'

const store = useAppStore()

const items = computed(() => store.t.faq.items)

// Открытый пункт (по умолчанию — первый). null — если ни один не открыт.
const activeId = ref<number | null>(1)

function toggle(id: number) {
  activeId.value = activeId.value === id ? null : id
}
</script>

<template>
  <section id="faq" class="bg-gradient-to-br from-primary to-[#3b74ff]">
    <div class="max-w-[1000px] mx-auto py-20 px-5">
      <h2 class="text-3xl md:text-5xl font-bold text-center text-white mb-12">
        {{ store.t.faq.title }}
      </h2>

      <!-- Пункты аккордеона -->
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-white/15 rounded-2xl border border-white/20 mb-4 overflow-hidden"
      >
        <!-- Шапка -->
        <button
          type="button"
          class="w-full p-6 flex justify-between items-center gap-4 text-left text-white"
          @click="toggle(item.id)"
        >
          <h3 class="text-lg md:text-xl font-medium">{{ item.title }}</h3>

          <!-- Иконка: плюс -> крестик -->
          <span
            class="shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
            :class="
              activeId === item.id
                ? 'bg-white rotate-45 shadow-md'
                : 'bg-white/20 hover:bg-white/30'
            "
          >
            <svg
              class="w-5 h-5 transition-colors duration-300"
              :class="activeId === item.id ? 'stroke-primary text-primary' : 'stroke-white text-white'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </button>

        <!-- Анимация высоты через CSS Grid -->
        <div
          class="grid transition-[grid-template-rows] duration-300 ease-in-out"
          :style="{ gridTemplateRows: activeId === item.id ? '1fr' : '0fr' }"
        >
          <div class="overflow-hidden">
            <p class="p-6 pt-0 text-white/70 leading-relaxed">
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
