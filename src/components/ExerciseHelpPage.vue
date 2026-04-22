<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { courseName, lesson1Exercises, lessons } from '../data/course'

const route = useRoute()

const lessonId = computed(() => Number(route.params.id))
const exerciseId = computed(() => String(route.params.exerciseId ?? ''))
const lesson = computed(() => lessons.find((item) => item.id === lessonId.value))
const isLesson1 = computed(() => lessonId.value === 1)
const exercise = computed(() => lesson1Exercises.find((item) => item.id === exerciseId.value))
</script>

<template>
  <main class="page-shell">
    <header class="site-header">
      <RouterLink to="/" class="eyebrow">{{ courseName }}</RouterLink>
    </header>

    <section class="content-grid lesson-page">
      <div class="section-heading">
        <div class="lesson-action-row">
          <RouterLink :to="`/lektion/${lessonId}/ovningar`" class="page-link-button">
            Till övningar
          </RouterLink>
          <RouterLink :to="`/lektion/${lessonId}`" class="page-link-button">
            Till lektionssidan
          </RouterLink>
        </div>
        <h2>Hjälp för {{ exercise?.title ?? 'övning' }}</h2>
        <p>{{ lesson?.title ?? `Lektion ${lessonId}` }}</p>
      </div>

      <article v-if="isLesson1 && exercise" class="exercise-help">
        <div class="exercise-help-card">
          <p class="eyebrow">Uppgift</p>
          <h3>{{ exercise.title }}</h3>
          <p class="exercise-goal">{{ exercise.goal }}</p>
          <p>{{ exercise.prompt }}</p>
        </div>

        <div class="exercise-help-card">
          <p class="eyebrow">Steg för steg</p>
          <ol class="help-list ordered">
            <li v-for="item in exercise.steps" :key="item">{{ item }}</li>
          </ol>
        </div>

        <div class="exercise-help-card">
          <p class="eyebrow">Exempel att titta på</p>
          <ul class="help-list">
            <li v-for="item in exercise.example" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="exercise-help-card">
          <p class="eyebrow">Vad du ska se</p>
          <ul class="help-list">
            <li v-for="item in exercise.expected" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="exercise-help-card">
          <p class="eyebrow">Facit</p>
          <ul class="help-list">
            <li v-for="item in exercise.answer" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="exercise-help-card">
          <p class="eyebrow">Vanliga fel</p>
          <ul class="help-list">
            <li v-for="item in exercise.mistakes" :key="item">{{ item }}</li>
          </ul>
        </div>
      </article>

      <article v-else class="info-card">
        <h3>Hjälpsida saknas</h3>
        <p>Den här övningen är inte kopplad till något hjälpunderlag ännu.</p>
      </article>

      <RouterLink :to="`/lektion/${lessonId}/ovningar`" class="back-link">Tillbaka till övningarna</RouterLink>
    </section>
  </main>
</template>
