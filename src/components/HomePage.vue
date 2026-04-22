<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { courseName, lessons } from '../data/course'
</script>

<template>
  <main class="page-shell">
    <header class="site-header">
      <RouterLink to="/" class="eyebrow">{{ courseName }}</RouterLink>
    </header>

    <section class="content-grid">
      <div class="section-heading">
        <p class="eyebrow">Innehåll</p>
        <h2>Lektioner</h2>
      </div>

      <div class="lesson-overview">
        <RouterLink
          v-for="lesson in lessons"
          :key="lesson.id"
          :to="`/lektion/${lesson.id}`"
          class="lesson-card lesson-link"
        >
          <div class="lesson-badge">{{ lesson.title }}</div>
          <h3>{{ lesson.focus }}</h3>
          <p>{{ lesson.notes }}</p>
        </RouterLink>
      </div>
    </section>
  </main>
</template>
