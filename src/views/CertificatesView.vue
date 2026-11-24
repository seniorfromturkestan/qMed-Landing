<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { certificates } from '../data/certificates'
import logo from '../assets/Logo.png'

useHead({
  title: 'Сертификаты — qMed AI',
  meta: [
    { name: 'description', content: 'Благодарственные письма участникам наблюдения qMed AI' },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>

<template>
  <section class="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-10">
    <div class="mx-auto max-w-container">
      <header class="flex items-center justify-between gap-4">
        <RouterLink to="/" class="inline-flex items-center">
          <img :src="logo" alt="qMed AI" class="h-9 w-auto object-contain" />
        </RouterLink>
        <span class="text-sm text-black/50">{{ certificates.length }}</span>
      </header>

      <h1 class="mt-8 text-3xl font-semibold sm:text-4xl">Сертификаты</h1>

      <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="c in certificates"
          :key="c.id"
          :to="`/${c.id}`"
          class="group block overflow-hidden rounded-md border border-black/10 transition hover:border-primary hover:shadow-lg"
        >
          <img
            :src="c.src"
            :alt="`qMed AI — ${c.id}`"
            loading="lazy"
            class="block aspect-[1491/1055] w-full object-cover"
          />
          <div class="flex items-center justify-between px-4 py-3 text-sm">
            <span class="font-medium">№{{ c.id }}</span>
            <span class="text-black/40 transition group-hover:text-primary">qmedai.kz/{{ c.id }}</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
