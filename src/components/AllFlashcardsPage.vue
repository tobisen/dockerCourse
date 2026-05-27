<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { allFlashcards, courseName, lessons } from '../data/course'
import { shuffleArray } from '../utils/shuffle'

const lessonLabel = computed(() => lessons
  .filter((lesson) => lesson.id <= 5)
  .map((lesson) => lesson.title)
  .join(' + '))

const flashcards = ref<typeof allFlashcards>([])
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
    allFlashcards.map((card) => ({
      ...card,
      options: shuffleArray(card.options),
    })),
  )
  selectedOptions.value = flashcards.value.map(() => null)
  activeIndex.value = 0
}

resetFlashcards()

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
          <RouterLink to="/" class="page-link-button">Till startsidan</RouterLink>
          <RouterLink to="/lektion/1" class="page-link-button">Till lektion 1</RouterLink>
        </div>
        <h2>Alla flashcards</h2>
        <p>
          Här finns en samlad kortlek med allt flashcard-material vi har för {{ lessonLabel }}.
        </p>
      </div>

      <div class="flashcard-layout flashcard-layout-lesson">
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
            <p>
              Det här setet samlar flashcards från lektion 1 till 3 i en gemensam kortlek.
            </p>
          </div>

          <div class="info-card flashcard-score-card">
            <h3>Din poäng</h3>
            <p>{{ correctCount }} / {{ flashcards.length }} rätt</p>
            <p class="flashcard-score-note">Poängen nollställs när du öppnar sidan igen.</p>
          </div>

          <div class="set-list">
            <article class="set-card ready">
              <div class="set-card-top">
                <h4>Alla lektioner</h4>
                <span class="set-pill">Ready</span>
              </div>
              <p>{{ flashcards.length }} kort i en gemensam blandning.</p>
              <strong>Aktiv kortlek</strong>
            </article>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>
