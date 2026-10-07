import type { Directive } from 'vue'

/**
 * v-reveal — плавное появление элемента при попадании в область видимости.
 *
 * Использование:
 *   <div v-reveal class="reveal">...</div>
 *
 * Элемент со стартовым классом `reveal` (opacity-0 + смещение) получает
 * класс `reveal-visible`, когда попадает в viewport. CSS-переход описан
 * в src/style.css. Задержку можно передать значением: v-reveal="150" (мс).
 */
const observer =
  typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible')
              obs.unobserve(entry.target) // анимируем один раз
            }
          })
        },
        { threshold: 0.15 },
      )
    : null

export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) {
      el.style.transitionDelay = `${binding.value}ms`
    }
    if (observer) {
      observer.observe(el)
    } else {
      // Фолбэк для сред без IntersectionObserver
      el.classList.add('reveal-visible')
    }
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
