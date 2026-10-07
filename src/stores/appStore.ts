import { defineStore } from 'pinia'
import { translations, type Language } from '../locales/translations'

export const useAppStore = defineStore('app', {
  state: () => ({
    // Мобильное меню (бургер)
    isMobileMenuOpen: false,
    // Модальное окно заявки на демо
    isDemoModalOpen: false,
    // Текущий язык интерфейса
    lang: 'RU' as Language,
  }),

  getters: {
    t: (state) => translations[state.lang],
  },

  actions: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },

    openDemoModal() {
      this.isDemoModalOpen = true
    },
    closeDemoModal() {
      this.isDemoModalOpen = false
    },
    toggleDemoModal() {
      this.isDemoModalOpen = !this.isDemoModalOpen
    },

    toggleLang() {
      this.lang = this.lang === 'RU' ? 'KZ' : 'RU'
    },
  },
})
