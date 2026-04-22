import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import ExercisePage from './components/ExercisePage.vue'
import ExerciseHelpPage from './components/ExerciseHelpPage.vue'
import FlashcardsPage from './components/FlashcardsPage.vue'
import LessonPage from './components/LessonPage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/lektion/:id',
      component: LessonPage,
    },
    {
      path: '/lektion/:id/ovningar',
      component: ExercisePage,
    },
    {
      path: '/lektion/:id/ovningar/:exerciseId',
      component: ExerciseHelpPage,
    },
    {
      path: '/lektion/:id/flashcards',
      component: FlashcardsPage,
    },
  ],
})
