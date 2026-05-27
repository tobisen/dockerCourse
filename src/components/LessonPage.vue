<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { courseName, lessons, lesson1Topics, lesson2Topics, lesson3Topics } from '../data/course'

const route = useRoute()

const lessonId = computed(() => Number(route.params.id))
const lesson = computed(() => lessons.find((item) => item.id === lessonId.value))
const lessonNumber = computed(() => lessonId.value)
const isLesson1 = computed(() => lessonId.value === 1)
const isLesson2 = computed(() => lessonId.value === 2)
const isLesson3 = computed(() => lessonId.value === 3)
const topics = computed(() => {
  if (isLesson1.value) return lesson1Topics
  if (isLesson2.value) return lesson2Topics
  if (isLesson3.value) return lesson3Topics
  return []
})

const lesson1Resources = [
  {
    label: 'Day 1 - Docker.pptx',
    href: '/lesson-material/Day 1 - Docker.pptx',
    description: 'Presentationen från lektion 1.',
  },
  {
    label: 'petclinic-app 1.zip',
    href: '/lesson-material/petclinic-app 1.zip',
    description: 'Källkod och exempelprojekt för övningarna.',
  },
]

const lesson2Resources = [
  {
    label: 'Day 2 - Docker.pptx',
    href: '/lesson-material/Day 2 - Docker.pptx',
    description: 'Powerpointen för lektion 2.',
  },
]

const resources = computed(() => {
  if (isLesson1.value) return lesson1Resources
  if (isLesson2.value) return lesson2Resources
  if (isLesson3.value) {
    return [
      {
        label: 'Day 3 - Docker.pptx',
        href: '/lesson-material/Day 3 - Docker.pptx',
        description: 'Powerpointen för lektion 3.',
      },
    ]
  }
  return []
})
</script>

<template>
  <main class="page-shell">
    <header class="site-header">
      <RouterLink to="/" class="eyebrow">{{ courseName }}</RouterLink>
    </header>

    <section class="content-grid lesson-page">
      <div class="section-heading">
        <div class="lesson-action-row">
          <RouterLink :to="`/lektion/${lessonId}/flashcards`" class="page-link-button">
            Flashcards
          </RouterLink>
          <RouterLink :to="`/lektion/${lessonId}/ovningar`" class="page-link-button">
            Övningar
          </RouterLink>
        </div>
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
          <p>{{ isLesson1 || isLesson2 || isLesson3 ? 'Färdig att plugga' : 'Kommer fyllas på' }}</p>
        </article>
      </div>

      <div v-if="isLesson1 || isLesson2 || isLesson3" class="lesson-summary">
        <div class="lesson-resources">
          <div class="section-heading compact">
            <h3>Resurser</h3>
            <p>Här finns filerna som hör till {{ lesson?.title ?? `Lektion ${lessonNumber}` }}.</p>
          </div>

          <div class="resource-list">
            <a
              v-for="resource in resources"
              :key="resource.label"
              :href="resource.href"
              class="resource-link"
              :download="resource.label"
            >
              <strong>{{ resource.label }}</strong>
              <span>{{ resource.description }}</span>
            </a>
          </div>
        </div>

        <div class="section-heading compact">
          <p class="eyebrow">{{ lesson?.title ?? `Lektion ${lessonNumber}` }}</p>
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
