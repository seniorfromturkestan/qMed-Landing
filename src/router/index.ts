import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import ImageView from '../views/ImageView.vue'
import image002 from '../assets/002.png'
import image003 from '../assets/003.png'
import image004 from '../assets/004.png'
import image005 from '../assets/005.png'
import image006 from '../assets/006.png'
import image007 from '../assets/007.png'
import image008 from '../assets/008.png'
import image009 from '../assets/009.png'
import image010 from '../assets/010.png'
import image011 from '../assets/011.png'
import image012 from '../assets/012.png'
import image013 from '../assets/013.png'
import image014 from '../assets/014.png'
import image015 from '../assets/015.png'
import image016 from '../assets/016.png'
import image017 from '../assets/017.png'
import image018 from '../assets/018.png'
import image019 from '../assets/019.png'
import image020 from '../assets/020.png'
import image021 from '../assets/021.png'
import image022 from '../assets/022.png'
import image023 from '../assets/023.png'
import image024 from '../assets/024.png'
import image025 from '../assets/025.png'
import image026 from '../assets/026.png'
import image027 from '../assets/027.png'
import image028 from '../assets/028.png'
import image029 from '../assets/029.png'
import image030 from '../assets/030.png'
import image031 from '../assets/031.png'
import image032 from '../assets/032.png'
import image033 from '../assets/033.png'
import image034 from '../assets/034.png'
import image035 from '../assets/035.png'
import image036 from '../assets/036.png'
import image037 from '../assets/037.png'
import image038 from '../assets/038.png'
import image039 from '../assets/039.png'
import image040 from '../assets/040.png'



const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingView,
  },
  {
    path: '/002',
    name: 'image-002',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image002,
      imageAlt: 'qMed AI — 002',
      pageTitle: '002 — qMed AI',
    },
  },
  {
    path: '/003',
    name: 'image-003',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image003,
      imageAlt: 'qMed AI — 003',
      pageTitle: '003 — qMed AI',
    },
  },
  {
    path: '/004',
    name: 'image-004',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image004,
      imageAlt: 'qMed AI — 004',
      pageTitle: '004 — qMed AI',
    },
  },
  {
    path: '/005',
    name: 'image-005',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image005,
      imageAlt: 'qMed AI — 005',
      pageTitle: '005 — qMed AI',
    },
  },
  {
    path: '/006',
    name: 'image-006',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image006,
      imageAlt: 'qMed AI — 006',
      pageTitle: '006 — qMed AI',
    },
  },
  {
    path: '/007',
    name: 'image-007',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image007,
      imageAlt: 'qMed AI — 007',
      pageTitle: '007 — qMed AI',
    },
  },
  {
    path: '/008',
    name: 'image-008',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image008,
      imageAlt: 'qMed AI — 008',
      pageTitle: '008 — qMed AI',
    },
  },
  {
    path: '/009',
    name: 'image-009',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image009,
      imageAlt: 'qMed AI — 009',
      pageTitle: '009 — qMed AI',
    },
  },
  {
    path: '/010',
    name: 'image-010',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image010,
      imageAlt: 'qMed AI — 010',
      pageTitle: '010 — qMed AI',
    },
  },
  {
    path: '/011',
    name: 'image-011',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image011,
      imageAlt: 'qMed AI — 011',
      pageTitle: '011 — qMed AI',
    },
  },
  {
    path: '/012',
    name: 'image-012',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image012,
      imageAlt: 'qMed AI — 012',
      pageTitle: '012 — qMed AI',
    },
  },
  {
    path: '/013',
    name: 'image-013',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image013,
      imageAlt: 'qMed AI — 013',
      pageTitle: '013 — qMed AI',
    },
  },
  {
    path: '/014',
    name: 'image-014',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image014,
      imageAlt: 'qMed AI — 014',
      pageTitle: '014 — qMed AI',
    },
  },
  {
    path: '/015',
    name: 'image-015',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image015,
      imageAlt: 'qMed AI — 015',
      pageTitle: '015 — qMed AI',
    },
  },
  {
    path: '/016',
    name: 'image-016',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image016,
      imageAlt: 'qMed AI — 016',
      pageTitle: '016 — qMed AI',
    },
  },
  {
    path: '/017',
    name: 'image-017',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image017,
      imageAlt: 'qMed AI — 017',
      pageTitle: '017 — qMed AI',
    },
  },
  {
    path: '/018',
    name: 'image-018',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image018,
      imageAlt: 'qMed AI — 018',
      pageTitle: '018 — qMed AI',
    },
  },
  {
    path: '/019',
    name: 'image-019',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image019,
      imageAlt: 'qMed AI — 019',
      pageTitle: '019 — qMed AI',
    },
  },
  {
    path: '/020',
    name: 'image-020',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image020,
      imageAlt: 'qMed AI — 020',
      pageTitle: '020 — qMed AI',
    },
  },
  {
    path: '/021',
    name: 'image-021',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image021,
      imageAlt: 'qMed AI — 021',
      pageTitle: '021 — qMed AI',
    },
  },
  {
    path: '/022',
    name: 'image-022',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image022,
      imageAlt: 'qMed AI — 022',
      pageTitle: '022 — qMed AI',
    },
  },
  {
    path: '/023',
    name: 'image-023',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image023,
      imageAlt: 'qMed AI — 023',
      pageTitle: '023 — qMed AI',
    },
  },
  {
    path: '/024',
    name: 'image-024',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image024,
      imageAlt: 'qMed AI — 024',
      pageTitle: '024 — qMed AI',
    },
  },
  {
    path: '/025',
    name: 'image-025',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image025,
      imageAlt: 'qMed AI — 025',
      pageTitle: '025 — qMed AI',
    },
  },
  {
    path: '/026',
    name: 'image-026',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image026,
      imageAlt: 'qMed AI — 026',
      pageTitle: '026 — qMed AI',
    },
  },
  {
    path: '/027',
    name: 'image-027',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image027,
      imageAlt: 'qMed AI — 027',
      pageTitle: '027 — qMed AI',
    },
  },
  {
    path: '/028',
    name: 'image-028',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image028,
      imageAlt: 'qMed AI — 028',
      pageTitle: '028 — qMed AI',
    },
  },
  {
    path: '/029',
    name: 'image-029',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image029,
      imageAlt: 'qMed AI — 029',
      pageTitle: '029 — qMed AI',
    },
  },
  {
    path: '/030',
    name: 'image-030',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image030,
      imageAlt: 'qMed AI — 030',
      pageTitle: '030 — qMed AI',
    },
  },
  {
    path: '/031',
    name: 'image-031',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image031,
      imageAlt: 'qMed AI — 031',
      pageTitle: '031 — qMed AI',
    },
  },
  {
    path: '/032',
    name: 'image-032',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image032,
      imageAlt: 'qMed AI — 032',
      pageTitle: '032 — qMed AI',
    },
  },
  {
    path: '/033',
    name: 'image-033',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image033,
      imageAlt: 'qMed AI — 033',
      pageTitle: '033 — qMed AI',
    },
  },
  {
    path: '/034',
    name: 'image-034',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image034,
      imageAlt: 'qMed AI — 034',
      pageTitle: '034 — qMed AI',
    },
  },
  {
    path: '/035',
    name: 'image-035',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image035,
      imageAlt: 'qMed AI — 035',
      pageTitle: '035 — qMed AI',
    },
  },
  {
    path: '/036',
    name: 'image-036',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image036,
      imageAlt: 'qMed AI — 036',
      pageTitle: '036 — qMed AI',
    },
  },
  {
    path: '/037',
    name: 'image-037',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image037,
      imageAlt: 'qMed AI — 037',
      pageTitle: '037 — qMed AI',
    },
  },
  {
    path: '/038',
    name: 'image-038',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image038,
      imageAlt: 'qMed AI — 038',
      pageTitle: '038 — qMed AI',
    },
  },
  {
    path: '/039',
    name: 'image-039',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image039,
      imageAlt: 'qMed AI — 039',
      pageTitle: '039 — qMed AI',
    },
  },
  {
    path: '/040',
    name: 'image-040',
    component: ImageView,
    meta: { hideLayout: true },
    props: {
      imageSrc: image040,
      imageAlt: 'qMed AI — 040',
      pageTitle: '040 — qMed AI',
    },
  },
]

// Скролл наверх при смене маршрута, сохраняя позицию при «назад».
export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})
