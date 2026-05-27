<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { courseName, lessons, lesson1Flashcards } from '../data/course'
import { shuffleArray } from '../utils/shuffle'

const route = useRoute()

const lessonId = computed(() => Number(route.params.id))
const lesson = computed(() => lessons.find((item) => item.id === lessonId.value))
const isLesson1 = computed(() => lessonId.value === 1)
const sourceFlashcards = computed(() => (isLesson1.value ? lesson1Flashcards : []))
const flashcards = ref<typeof lesson1Flashcards>([])
const selectedOptions = ref<(number | null)[]>([])

const activeIndex = ref(0)

const activeFlashcard = computed(() => flashcards.value[activeIndex.value])
const activeSelectedOption = computed(() => selectedOptions.value[activeIndex.value] ?? null)
const isSelectedCorrect = computed(() => {
  if (activeSelectedOption.value === null) return false
  return activeFlashcard.value.options[activeSelectedOption.value] === activeFlashcard.value.answer
})
const correctCount = computed(() =>
  flashcards.value.reduce((count, card, index) => {
    const selectedOption = selectedOptions.value[index]
    return count + (selectedOption !== null && card.options[selectedOption] === card.answer ? 1 : 0)
  }, 0),
)

function resetFlashcards() {
  flashcards.value = shuffleArray(
    sourceFlashcards.value.map((card) => ({
      ...card,
      options: shuffleArray(card.options),
    })),
  )
  selectedOptions.value = flashcards.value.map(() => null)
  activeIndex.value = 0
}

watch(sourceFlashcards, resetFlashcards, { immediate: true })

function nextCard() {
  activeIndex.value = (activeIndex.value + 1) % flashcards.value.length
}

function previousCard() {
  activeIndex.value = (activeIndex.value - 1 + flashcards.value.length) % flashcards.value.length
}

function chooseOption(index: number) {
  selectedOptions.value[activeIndex.value] = index
}

function resetChoice() {
  selectedOptions.value[activeIndex.value] = null
}
</script>

<template>
  <main class="page-shell">
    <header class="site-header">
      <RouterLink to="/" class="eyebrow">{{ courseName }}</RouterLink>
    </header>

    <section class="content-grid lesson-page">
      <div class="section-heading">
        <div class="lesson-action-row">
          <RouterLink :to="`/lektion/${lessonId}`" class="page-link-button">
            Till lektionssidan
          </RouterLink>
          <RouterLink :to="`/lektion/${lessonId}/ovningar`" class="page-link-button">
            Övningar
          </RouterLink>
        </div>
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
                    selected: activeSelectedOption === index,
                    correct: activeSelectedOption !== null && option === activeFlashcard.answer,
                    incorrect:
                      activeSelectedOption !== null &&
                      activeSelectedOption === index &&
                      option !== activeFlashcard.answer,
                  }"
                  @click="chooseOption(index)"
                >
                  <span class="option-letter">{{ String.fromCharCode(65 + index) }}</span>
                  <span>{{ option }}</span>
                </button>
              </div>

              <p v-if="activeSelectedOption !== null" class="answer-feedback" :class="{ correct: isSelectedCorrect }">
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

          <div class="info-card flashcard-score-card">
            <h3>Din poäng</h3>
            <p>{{ correctCount }} / {{ flashcards.length }} rätt</p>
            <p class="flashcard-score-note">
              Poängen nollställs när du öppnar flashcards igen.
            </p>
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
