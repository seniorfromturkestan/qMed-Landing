import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import ImageView from '../views/ImageView.vue'
import CertificatesView from '../views/CertificatesView.vue'
import { certificates } from '../data/certificates'

const certificateRoutes = certificates.map((c) => ({
  path: `/${c.id}`,
  name: `image-${c.id}`,
  component: ImageView,
  meta: { hideLayout: true },
  props: {
    imageSrc: c.src,
    imageAlt: `qMed AI — ${c.id}`,
    pageTitle: `${c.id} — qMed AI`,
  },
}))

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingView,
  },
  {
    path: '/certificates',
    name: 'certificates',
    component: CertificatesView,
    meta: { hideLayout: true },
  },
  ...certificateRoutes,
]

// Скролл наверх при смене маршрута, сохраняя позицию при «назад».
export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})
