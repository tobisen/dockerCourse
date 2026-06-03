<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { allExercises, courseName, lessons } from '../data/course'
</script>

<template>
  <main class="page-shell">
    <header class="site-header">
      <RouterLink to="/" class="eyebrow">{{ courseName }}</RouterLink>
    </header>

    <section class="content-grid lesson-page">
      <div class="section-heading">
        <div class="lesson-action-row">
          <RouterLink to="/" class="page-link-button">Till startsidan</RouterLink>
          <RouterLink to="/flashcards" class="page-link-button">Till flashcards</RouterLink>
        </div>
        <h2>Alla övningar</h2>
        <p>
          Här finns en samlad översikt över övningarna från lektion 1 till 6. Varje övning har
          en egen hjälpsida med exempel och facit.
        </p>
      </div>

      <div class="lesson-page-meta">
        <article class="info-card">
          <h3>Totalt</h3>
          <p>{{ allExercises.length }} övningar</p>
        </article>
        <article class="info-card">
          <h3>Lektioner</h3>
          <p>{{ lessons.length }} lektioner i en gemensam repetition</p>
        </article>
      </div>

      <div class="exercise-section">
        <div class="section-heading compact">
          <p class="eyebrow">Repetition</p>
          <h3>Allt övningsmaterial på ett ställe</h3>
          <p>
            Använd den här sidan när du vill välja en övning snabbt utan att gå in i en specifik
            lektion först.
          </p>
        </div>

        <div class="exercise-list">
          <article
            v-for="item in allExercises"
            :key="`${item.lessonId}-${item.exercise.id}`"
            class="exercise-card"
          >
            <div class="exercise-card-top">
              <div class="exercise-card-header">
                <div class="lesson-badge">{{ item.lessonTitle }}</div>
                <h4>{{ item.exercise.title }}</h4>
              </div>
              <RouterLink
                :to="`/lektion/${item.lessonId}/ovningar/${item.exercise.id}`"
                class="page-link-button"
              >
                Hjälp och facit
              </RouterLink>
            </div>
            <p class="exercise-goal">{{ item.exercise.goal }}</p>
            <p>{{ item.exercise.prompt }}</p>
          </article>
        </div>
      </div>

      <RouterLink to="/" class="back-link">Tillbaka till översikten</RouterLink>
    </section>
  </main>
</template>
