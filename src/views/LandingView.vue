<script setup lang="ts">
import { useHead } from '@unhead/vue'
import HeroSection from '../components/HeroSection.vue'
import MarqueeBanner from '../components/MarqueeBanner.vue'
import FounderBlock from '../components/FounderBlock.vue'
import StatsGrid from '../components/StatsGrid.vue'
import ProductsSection from '../components/ProductsSection.vue'
// import ProductPlatform from '../components/ProductPlatform.vue'
// import ProductApp from '../components/ProductApp.vue'
import AccordionSection from '../components/AccordionSection.vue'
import PromoVideoBlock from '../components/PromoVideoBlock.vue'
import MissionBlock from '../components/MissionBlock.vue'
import NewsSection from '../components/NewsSection.vue'
import ContactBanner from '../components/ContactBanner.vue'

// SEO мета-теги для главной страницы
useHead({
  title: 'qMed AI — цифровая платформа хронического наблюдения',
  link: [
    { rel: 'canonical', href: 'https://qmedai.kz/' },
  ],
  meta: [
    {
      name: 'description',
      content:
        'qMed AI — цифровая платформа для пациента и медицинской команды: ежедневный ' +
        'самоконтроль, сигналы риска, очередь внимания и аналитика для ПМСП и программ ПУЗ.',
    },
    // Open Graph — для корректных превью в мессенджерах и соцсетях
    { property: 'og:title', content: 'qMed AI — цифровая платформа хронического наблюдения' },
    {
      property: 'og:description',
      content: 'Ежедневное цифровое сопровождение пациента и управляемое наблюдение для поликлиники.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ru_RU' },
    { property: 'og:site_name', content: 'qMed AI' },
    { property: 'og:url', content: 'https://qmedai.kz/' },
    { property: 'og:image', content: 'https://qmedai.kz/logo-qMed.png' },
    { property: 'og:image:width', content: '427' },
    { property: 'og:image:height', content: '427' },
    { property: 'og:image:alt', content: 'Логотип qMed AI' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'qMed AI — цифровая платформа хронического наблюдения' },
    {
      name: 'twitter:description',
      content: 'Ежедневное цифровое сопровождение пациента и управляемое наблюдение для поликлиники.',
    },
    { name: 'twitter:image', content: 'https://qmedai.kz/logo-qMed.png' },
    { name: 'twitter:image:alt', content: 'Логотип qMed AI' },
  ],
})
</script>

<template>
  <HeroSection />
  <MarqueeBanner />
  <MissionBlock />
  <PromoVideoBlock />
  <StatsGrid />
  <FounderBlock />
  <ProductsSection />
  <!-- <ProductPlatform /> -->
  <!-- <ProductApp /> -->
  <AccordionSection />
  <NewsSection />
  <ContactBanner />
</template>
