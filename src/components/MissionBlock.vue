<script setup lang="ts">
import { useAppStore } from '../stores/appStore'

const store = useAppStore()
</script>

<template>
  <section class="bg-[#f7f7f7]">
    <div class="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

        <!-- Решение -->
        <div v-reveal class="reveal">
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            {{ store.t.mission.solutionTitle }}
          </h2>
          <div class="w-16 h-1 bg-primary rounded-full mt-5 mb-6" />
          <p class="text-lg md:text-xl text-black/70 leading-relaxed">
            {{ store.t.mission.solutionText }}
          </p>
        </div>

        <!-- Наша цель -->
        <div v-reveal="150" class="reveal">
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            {{ store.t.mission.goalTitle }}
          </h2>
          <div class="w-16 h-1 bg-primary rounded-full mt-5 mb-6" />
          <p class="text-lg md:text-xl text-black/70 leading-relaxed">
            {{ store.t.mission.goalText }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
