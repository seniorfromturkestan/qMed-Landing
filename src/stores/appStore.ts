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

    setLang(newLang: Language) {
      this.lang = newLang
    },

    toggleLang() {
      const order: Language[] = ['RU', 'KZ', 'EN']
      const nextIndex = (order.indexOf(this.lang) + 1) % order.length
      this.lang = order[nextIndex]
    },
  },
})
