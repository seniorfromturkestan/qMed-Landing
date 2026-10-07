<script setup lang="ts">
import { useAppStore } from '../stores/appStore'

const store = useAppStore()

const links = [
  { label: 'Платформа', href: '#platform' },
  { label: 'Возможности', href: '#features' },
  { label: 'Сценарии', href: '#scenarios' },
  { label: 'FAQ', href: '#faq' },
]

// Открыть заявку из мобильного меню: закрываем меню, открываем модалку.
function requestDemo() {
  store.closeMobileMenu()
  store.openDemoModal()
}
</script>

<template>
  <Transition name="slide">
    <div
      v-if="store.isMobileMenuOpen"
      class="fixed inset-0 z-40 bg-white flex flex-col md:hidden"
    >
      <!-- Шапка -->
      <div class="h-[70px] px-[20px] flex items-center justify-between border-b border-black/10">
        <a href="#" class="text-xl font-bold tracking-tight" @click="store.closeMobileMenu">
          QMED <span class="text-primary">AI</span>
        </a>

        <!-- Крестик -->
        <button
          class="w-[30px] h-[30px] flex items-center justify-center text-black/60 hover:text-black transition"
          aria-label="Закрыть меню"
          @click="store.closeMobileMenu"
        >
          <svg
            class="w-[22px] h-[22px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>

      <!-- Ссылки -->
      <nav class="flex-1 px-[20px] py-[40px] flex flex-col gap-[30px]">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-2xl font-medium text-black hover:text-primary transition"
          @click="store.closeMobileMenu"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Кнопка внизу -->
      <div class="px-[20px] pb-[40px]">
        <button
          class="btn-glow w-full text-white rounded-btn py-[14px] font-medium"
          @click="requestDemo"
        >
          Запросить демо
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Выезд панели справа налево */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
