<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '../stores/appStore'

const store = useAppStore()

const rawNews = [
  {
    id: 1,
    image: 'https://cdn.astanahub.com/media/photo_2024-11-21_09-48-02.jpg',
    source: 'Astana Hub',
    href:"https://astanahub.com/ru/article/itogi-astana-smart-city-top-10-startapov-kotorye-uluchshaiut-zhizn-stolitsy"
  },
  {
    id: 2,
    image: 'https://www.gov.kz/uploads/2024/10/31/b1d2977bf3e59f66af9e580bfb82afc2_1280x720.jpg',
    source: 'Gov.kz',
    href: 'https://www.gov.kz/memleket/entities/mam/press/news/details/875063?lang=ru',
  },
  {
    id: 4,
    image: 'https://pharmnewskz.com/upload/userfiles/images/%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0%20%D1%84%D0%B0%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8.jpg',
    source: 'PHARM NEWS KZ',
    href: 'https://pharmnewskz.com/ru/article/nauka-vyhodit-na-rynok-v-almaty-predstavili-medicinskie-tehnologii-dlya-kommercializacii_26776',
  },
  {
    id: 5,
    image: 'https://digitalbusiness.kz/wp-content/uploads/2025/12/pobediteli4.jpg',
    source: 'Digital Business',
    href:"https://digitalbusiness.kz/2025-12-17/kazahstanskie-startapi-stali-pobeditelyami-grand-finala-digital-startup-awards/"
  },
]

const newsItems = computed(() => {
  const tNews = store.t.news.items
  return rawNews.map((item) => {
    const found = tNews.find((t) => t.id === item.id)
    return {
      ...item,
      title: found ? found.title : '',
    }
  })
})
</script>

<template>
  <section class="relative overflow-hidden bg-white">


    <div class="relative z-10 max-w-[1200px] mx-auto px-5 py-20">
      <!-- Шапка -->
      <div v-reveal class="reveal text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">
          {{ store.t.news.title }}<span class="text-primary">qMed AI</span>
        </h2>
        <p class="text-black/50">
          {{ store.t.news.subtitle }}
        </p>
      </div>

      <!-- Слайдер на мобиле / Сетка на десктопе -->
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-5 px-5 scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:mx-0 sm:px-0 sm:pb-0 mt-12">
        <a
          v-for="(item, i) in newsItems"
          :key="item.id"
          v-reveal="i * 70"
          :href="item.href"
          class="reveal relative overflow-hidden rounded-[16px] aspect-[4/5] group cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.10)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(27,89,248,0.25)] w-[82vw] max-w-[320px] shrink-0 snap-center sm:w-auto sm:max-w-none"
        >
          <!-- Изображение -->
          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          <!-- Градиентный оверлей -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent z-10" />

          <!-- Текст -->
          <div class="absolute inset-x-4 bottom-4 z-20 text-white">
            <span class="inline-block rounded-full bg-white/20 text-xs font-medium px-3 py-1 mb-2">
              {{ item.source }}
            </span>
            <p class="text-sm md:text-base font-medium leading-snug">{{ item.title }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
