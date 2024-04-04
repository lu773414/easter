import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/story',
      name: 'story',
      component: () => import('../views/story.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('../views/question.vue')
    }
  ]
})

export default router
