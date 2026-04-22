<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { courseName, lessons, lesson1Exercises } from '../data/course'

const route = useRoute()

const lessonId = computed(() => Number(route.params.id))
const lesson = computed(() => lessons.find((item) => item.id === lessonId.value))
const isLesson1 = computed(() => lessonId.value === 1)
const exercises = computed(() => (isLesson1.value ? lesson1Exercises : []))
</script>

<template>
  <main class="page-shell">
    <header class="site-header">
      <RouterLink to="/" class="eyebrow">{{ courseName }}</RouterLink>
    </header>

    <section class="content-grid lesson-page">
      <div class="section-heading">
        <div class="lesson-action-row">
          <RouterLink :to="`/lektion/${lessonId}`" class="page-link-button">Till lektionssidan</RouterLink>
          <RouterLink :to="`/lektion/${lessonId}/flashcards`" class="page-link-button">Flashcards</RouterLink>
        </div>
        <h2>Övningar för {{ lesson?.title ?? `Lektion ${lessonId}` }}</h2>
        <p>Här tränar du aktivt på innehållet från lektionen med korta, praktiska uppgifter.</p>
      </div>

      <div v-if="isLesson1" class="exercise-section">
        <div class="section-heading compact">
          <p class="eyebrow">Lektion 1</p>
          <h3>Föreslagna övningar</h3>
          <p>De här övningarna är plockade direkt ur lektion 1-materialet för att stärka begrepp, flöde och kommandon.</p>
        </div>

        <div class="exercise-list">
          <article v-for="exercise in exercises" :key="exercise.title" class="exercise-card">
            <div class="exercise-card-top">
              <h4>{{ exercise.title }}</h4>
              <RouterLink :to="`/lektion/${lessonId}/ovningar/${exercise.id}`" class="page-link-button">
                Hjälp och facit
              </RouterLink>
            </div>
            <p class="exercise-goal">{{ exercise.goal }}</p>
            <p>{{ exercise.prompt }}</p>
          </article>
        </div>
      </div>

      <article v-else class="info-card">
        <h3>Övningar kommer snart</h3>
        <p>Det här lektionssetet har inga övningar ännu.</p>
      </article>

      <RouterLink :to="`/lektion/${lessonId}`" class="back-link">Tillbaka till lektionen</RouterLink>
    </section>
  </main>
</template>
