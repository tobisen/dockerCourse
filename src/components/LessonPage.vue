<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  courseName,
  lessons,
  lesson1Topics,
  lesson2Topics,
  lesson3Topics,
  lesson4Topics,
  lesson5Topics,
  lesson6Topics,
} from '../data/course'

const route = useRoute()

const lessonId = computed(() => Number(route.params.id))
const lesson = computed(() => lessons.find((item) => item.id === lessonId.value))
const lessonNumber = computed(() => lessonId.value)
const isLesson1 = computed(() => lessonId.value === 1)
const isLesson2 = computed(() => lessonId.value === 2)
const isLesson3 = computed(() => lessonId.value === 3)
const isLesson4 = computed(() => lessonId.value === 4)
const isLesson5 = computed(() => lessonId.value === 5)
const isLesson6 = computed(() => lessonId.value === 6)
const topics = computed(() => {
  if (isLesson1.value) return lesson1Topics
  if (isLesson2.value) return lesson2Topics
  if (isLesson3.value) return lesson3Topics
  if (isLesson4.value) return lesson4Topics
  if (isLesson5.value) return lesson5Topics
  if (isLesson6.value) return lesson6Topics
  return []
})

const lessonMaterialHref = (fileName: string) =>
  `${import.meta.env.BASE_URL}lesson-material/${fileName}`

const lesson1Resources = [
  {
    label: 'Day 1 - Docker.pptx',
    href: lessonMaterialHref('Day 1 - Docker.pptx'),
    description: 'Presentationen från lektion 1.',
  },
  {
    label: 'petclinic-app 1.zip',
    href: lessonMaterialHref('petclinic-app 1.zip'),
    description: 'Källkod och exempelprojekt för övningarna.',
  },
]

const lesson2Resources = [
  {
    label: 'Day 2 - Docker.pptx',
    href: lessonMaterialHref('Day 2 - Docker.pptx'),
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
        href: lessonMaterialHref('Day 3 - Docker.pptx'),
        description: 'Powerpointen för lektion 3.',
      },
    ]
  }
  if (isLesson4.value) {
    return [
      {
        label: 'Day 4.pptx',
        href: lessonMaterialHref('Day 4.pptx'),
        description: 'Powerpointen för lektion 4.',
      },
    ]
  }
  if (isLesson5.value) {
    return [
      {
        label: 'Day 5.pptx',
        href: lessonMaterialHref('Day 5.pptx'),
        description: 'Powerpointen för lektion 5.',
      },
    ]
  }
  if (isLesson6.value) {
    return [
      {
        label: 'Day 6.pptx',
        href: lessonMaterialHref('Day 6.pptx'),
        description: 'Powerpointen för lektion 6.',
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
          <p>
            {{ isLesson1 || isLesson2 || isLesson3 || isLesson4 || isLesson5 || isLesson6 ? 'Färdig att plugga' : 'Kommer fyllas på' }}
          </p>
        </article>
      </div>

      <div v-if="isLesson1 || isLesson2 || isLesson3 || isLesson4 || isLesson5 || isLesson6" class="lesson-summary">
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
