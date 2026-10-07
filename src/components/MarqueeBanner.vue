<script setup lang="ts">
import { useAppStore } from '../stores/appStore'

const store = useAppStore()
</script>

<template>
  <div class="relative bg-gradient-to-r from-primary to-[#3b74ff] text-white overflow-x-auto scrollbar-none whitespace-nowrap w-full py-[20px] shadow-[0_10px_30px_rgba(27,89,248,0.25)]">
    <!-- Плавное затухание по краям -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent z-10" />
    <div class="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#3b74ff] to-transparent z-10" />

    <!-- Движущийся контейнер: текст продублирован 2 раза для бесшовного цикла -->
    <div class="marquee flex w-max">
      <span class="font-medium text-sm md:text-base px-[10px]">{{ store.t.marquee }}</span>
      <span class="font-medium text-sm md:text-base px-[10px]" aria-hidden="true">{{ store.t.marquee }}</span>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  animation: marquee 20s linear infinite;
  will-change: transform;
}
@keyframes marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
</style>
