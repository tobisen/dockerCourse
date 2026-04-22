<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { courseName, lessons, lesson1Flashcards } from '../data/course'

const route = useRoute()

const lessonId = computed(() => Number(route.params.id))
const lesson = computed(() => lessons.find((item) => item.id === lessonId.value))
const isLesson1 = computed(() => lessonId.value === 1)
const flashcards = computed(() => (isLesson1.value ? lesson1Flashcards : []))

const activeIndex = ref(0)
const selectedOption = ref<number | null>(null)
const revealedAnswer = ref(false)

const activeFlashcard = computed(() => flashcards.value[activeIndex.value])
const isSelectedCorrect = computed(() => {
  if (selectedOption.value === null) return false
  return activeFlashcard.value.options[selectedOption.value] === activeFlashcard.value.answer
})

function nextCard() {
  activeIndex.value = (activeIndex.value + 1) % flashcards.value.length
  selectedOption.value = null
  revealedAnswer.value = false
}

function previousCard() {
  activeIndex.value = (activeIndex.value - 1 + flashcards.value.length) % flashcards.value.length
  selectedOption.value = null
  revealedAnswer.value = false
}

function chooseOption(index: number) {
  selectedOption.value = index
  revealedAnswer.value = true
}

function resetChoice() {
  selectedOption.value = null
  revealedAnswer.value = false
}
</script>

<template>
  <main class="page-shell">
    <header class="site-header">
      <RouterLink to="/" class="eyebrow">{{ courseName }}</RouterLink>
    </header>

    <section class="content-grid lesson-page">
      <div class="section-heading">
        <RouterLink :to="`/lektion/${lessonId}`" class="page-link-button">
          Till lektionssidan
        </RouterLink>
        <h2>Flashcards för {{ lesson?.title ?? `Lektion ${lessonId}` }}</h2>
        <p>
          Här kan du plugga lektionen med ett kort i taget. Välj ett svar, se facit direkt och
          bläddra vidare när du vill.
        </p>
      </div>

      <div v-if="isLesson1" class="flashcard-layout flashcard-layout-lesson">
        <div class="flashcard-stage">
          <div class="flashcard-stack">
            <div class="flashcard flashcard-front">
              <span class="flashcard-tag">{{ activeFlashcard.tag }}</span>
              <h3>{{ activeFlashcard.question }}</h3>
              <div class="option-list">
                <button
                  v-for="(option, index) in activeFlashcard.options"
                  :key="option"
                  class="option-button"
                  :class="{
                    selected: selectedOption === index,
                    correct: revealedAnswer && option === activeFlashcard.answer,
                    incorrect:
                      revealedAnswer &&
                      selectedOption === index &&
                      option !== activeFlashcard.answer,
                  }"
                  @click="chooseOption(index)"
                >
                  <span class="option-letter">{{ String.fromCharCode(65 + index) }}</span>
                  <span>{{ option }}</span>
                </button>
              </div>

              <p v-if="revealedAnswer" class="answer-feedback" :class="{ correct: isSelectedCorrect }">
                Rätt svar är: {{ activeFlashcard.answer }}
              </p>
            </div>

            <div class="card-controls">
              <button class="control-button" @click="previousCard">Föregående</button>
              <span class="control-counter">
                {{ activeIndex + 1 }} / {{ flashcards.length }}
              </span>
              <div class="control-group">
                <button class="control-button" @click="resetChoice">Rensa</button>
                <button class="control-button primary" @click="nextCard">Nästa</button>
              </div>
            </div>
          </div>
        </div>

        <aside class="flashcard-sidebar">
          <div class="section-heading compact">
            <h3>Vad du tränar på</h3>
            <p>Det här setet täcker grunderna från Lektion 1 och är byggt för snabb repetition.</p>
          </div>

          <div class="set-list">
            <article class="set-card ready">
              <div class="set-card-top">
                <h4>Lektion 1</h4>
                <span class="set-pill">Ready</span>
              </div>
              <p>{{ flashcards.length }} kort med frågor, svarsalternativ och facit.</p>
              <strong>Aktiv kortlek</strong>
            </article>
          </div>
        </aside>
      </div>

      <article v-else class="info-card">
        <h3>Ingen kortlek ännu</h3>
        <p>Det här lektionssetet är tomt tills vi fyller på med innehåll.</p>
      </article>

      <RouterLink :to="`/lektion/${lessonId}`" class="back-link">Tillbaka till lektionen</RouterLink>
    </section>
  </main>
</template>
