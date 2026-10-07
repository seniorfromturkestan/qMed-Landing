<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ScrollProgress from './components/ScrollProgress.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import DemoModal from './components/DemoModal.vue'
import FullScreenMenu from './components/FullScreenMenu.vue'

const route = useRoute()
const hideLayout = computed(() => route.meta.hideLayout === true)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-black">
    <!-- Индикатор прокрутки чтения (над хедером) -->
    <ScrollProgress v-if="!hideLayout" />

    <AppHeader v-if="!hideLayout" />

    <main class="flex-1" :class="{ 'pt-[70px]': !hideLayout }">
      <!-- Контент страницы подставляется маршрутизатором -->
      <RouterView />
    </main>

    <AppFooter v-if="!hideLayout" />

    <!-- Глобальные оверлеи (живут вне маршрутов) -->
    <FullScreenMenu v-if="!hideLayout" />
    <DemoModal v-if="!hideLayout" />
  </div>
</template>
