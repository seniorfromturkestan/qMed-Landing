<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '../stores/appStore'

const store = useAppStore()

const links = computed(() => [
  { label: store.t.header.nav.platform, href: '#platform' },
  { label: store.t.header.nav.features, href: '#features' },
  { label: store.t.header.nav.faq, href: '#faq' },
])

const phones = ['+7 (778) 488-21-31']

const socials = [
  { 
    label: 'Instagram', 
    href: 'https://www.instagram.com/qmed.ai/', 
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent'
  },
  { 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/company/qazaqstanbots/', 
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    hoverClass: 'hover:bg-[#0077b5] hover:text-white hover:border-transparent'
  },
  { 
    label: 'Telegram', 
    href: 'https://t.me/qmed2025', 
    icon: 'M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
    hoverClass: 'hover:bg-[#229ED9] hover:text-white hover:border-transparent'
  },
  { 
    label: 'WhatsApp', 
    href: 'https://wa.me/77784882131', 
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
    hoverClass: 'hover:bg-[#25D366] hover:text-white hover:border-transparent'
  }
]

// Закрыть меню и открыть модалку заявки
function requestDemo() {
  store.closeMobileMenu()
  store.openDemoModal()
}
</script>

<template>
  <Transition name="slide-down">
    <div
      v-if="store.isMobileMenuOpen"
      class="fixed inset-0 z-30 bg-white flex flex-col items-center justify-start overflow-y-auto pt-[110px] pb-20"
    >


      <!-- Навигация (закрытие — через бургер в шапке, который стал крестиком) -->
      <nav class="flex flex-col items-center gap-6">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-2xl md:text-3xl font-medium text-black hover:text-primary transition"
          @click="store.closeMobileMenu"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Ссылки на магазины приложений -->
      <div class="mt-10 flex flex-col items-center px-5">
        <p class="text-lg font-semibold text-black">
          {{ store.lang === 'KZ' ? 'Қосымшаны орнатыңыз' : 'Установите приложение' }}
        </p>
        <div class="mt-4 flex max-w-[520px] flex-wrap items-center justify-center gap-3">
          <a
            href="https://apps.apple.com/kz/app/qmed-ai/id6760441163"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Скачать qMed AI в App Store"
            class="inline-block transition duration-300 hover:opacity-80"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              class="h-10 w-auto object-contain"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.qmed.patient"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Скачать qMed AI в Google Play"
            class="inline-block transition duration-300 hover:opacity-80"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              class="h-10 w-auto object-contain"
            />
          </a>
          <a
            href="https://appgallery.huawei.com/app/C117401695"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Скачать qMed AI в AppGallery"
            class="inline-block transition duration-300 hover:opacity-80"
          >
            <img
              src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/campaign/emui91/images/Badge-Black.png"
              alt="AppGallery"
              class="h-10 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      <!-- Контакты -->
      <div class="mt-10 flex flex-col items-center gap-2 text-primary text-center">
        <p>{{ store.t.footer.address }}</p>
        <a href="mailto:support@qmed.kz" class="hover:underline">support@qmed.kz</a>
        <a
          v-for="phone in phones"
          :key="phone"
          :href="`tel:${phone.replace(/[^+\d]/g, '')}`"
          class="hover:underline"
        >
          {{ phone }}
        </a>
      </div>

      <!-- Соцсети -->
      <div class="mt-10 flex items-center gap-4">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
          class="flex w-[40px] h-[40px] items-center justify-center rounded-sm border border-black/15 text-black/60 transition duration-300"
          :class="social.hoverClass"
        >
          <svg class="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path :d="social.icon" /></svg>
        </a>
      </div>

      <!-- Кнопки -->
      <div class="mt-12 flex flex-col items-center gap-4">
        <button
          class="btn-glow w-[250px] text-white rounded-btn py-[14px] font-medium"
          @click="requestDemo"
        >
          {{ store.t.header.requestDemo }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Выезд сверху вниз */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.4s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}
.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
}
</style>
