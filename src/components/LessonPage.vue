<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { courseName, lessons, lesson1Topics } from '../data/course'

const route = useRoute()

const lessonId = computed(() => Number(route.params.id))
const lesson = computed(() => lessons.find((item) => item.id === lessonId.value))
const lessonNumber = computed(() => lessonId.value)
const isLesson1 = computed(() => lessonId.value === 1)
const topics = computed(() => (isLesson1.value ? lesson1Topics : []))
</script>

<template>
  <main class="page-shell">
    <header class="site-header">
      <RouterLink to="/" class="eyebrow">{{ courseName }}</RouterLink>
    </header>

    <section class="content-grid lesson-page">
      <div class="section-heading">
        <RouterLink :to="`/lektion/${lessonId}/flashcards`" class="page-link-button">
          Flashcards
        </RouterLink>
        <h2>{{ lesson?.title ?? `Lektion ${lessonNumber}` }}</h2>
        <p>{{ lesson?.notes ?? 'Innehåll kommer att fyllas på när kursmaterialet är klart.' }}</p>
      </div>

      <div class="lesson-page-meta">
        <article class="info-card">
          <h3>Fokus</h3>
          <p>{{ lesson?.focus ?? 'Placeholder för kommande kursmaterial.' }}</p>
        </article>
        <article class="info-card">
          <h3>Status</h3>
          <p>{{ isLesson1 ? 'Färdig att plugga' : 'Kommer fyllas på' }}</p>
        </article>
      </div>

      <div v-if="isLesson1" class="lesson-summary">
        <div class="section-heading compact">
          <p class="eyebrow">Lektion 1</p>
          <h3>Snabb överblick</h3>
          <p>Här är innehållet uppdelat i korta delar så det blir lätt att skumma och repetera.</p>
        </div>

        <ul class="lesson-summary-list">
          <li v-for="topic in topics" :key="topic.title" class="summary-item">
            <strong>{{ topic.title }}</strong>
            <span>{{ topic.details }}</span>
          </li>
        </ul>
      </div>

      <RouterLink to="/" class="back-link">Tillbaka till översikten</RouterLink>
    </section>
  </main>
</template>
