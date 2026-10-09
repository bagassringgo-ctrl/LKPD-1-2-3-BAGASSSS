import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/landingpage.vue'
import ProductPage from '../pages/productpage.vue'
import AboutPage from '../pages/aboutpage.vue'
import ContactPage from '../pages/contactpage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/product', component: ProductPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
  ],
})

export default router
