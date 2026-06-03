<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  courseName,
  lesson1Exercises,
  lesson2Exercises,
  lesson3Exercises,
  lesson4Exercises,
  lesson5Exercises,
  lesson6Exercises,
  lessons,
} from '../data/course'
import { shuffleArray } from '../utils/shuffle'

const route = useRoute()

const lessonId = computed(() => Number(route.params.id))
const exerciseId = computed(() => String(route.params.exerciseId ?? ''))
const lesson = computed(() => lessons.find((item) => item.id === lessonId.value))
const isLesson1 = computed(() => lessonId.value === 1)
const isLesson2 = computed(() => lessonId.value === 2)
const isLesson3 = computed(() => lessonId.value === 3)
const isLesson4 = computed(() => lessonId.value === 4)
const isLesson5 = computed(() => lessonId.value === 5)
const isLesson6 = computed(() => lessonId.value === 6)
const exercises = computed(() => {
  if (isLesson1.value) return lesson1Exercises
  if (isLesson2.value) return lesson2Exercises
  if (isLesson3.value) return lesson3Exercises
  if (isLesson4.value) return lesson4Exercises
  if (isLesson5.value) return lesson5Exercises
  if (isLesson6.value) return lesson6Exercises
  return []
})
const exercise = computed(() => exercises.value.find((item) => item.id === exerciseId.value))
const quizQuestions = ref<
  {
    question: string
    options: string[]
    answer: string
  }[]
>([])

const selectedAnswers = ref<(string | null)[]>([])

function resetQuiz() {
  quizQuestions.value = shuffleArray(
    (exercise.value?.quiz ?? []).map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    })),
  )
  selectedAnswers.value = quizQuestions.value.map(() => null)
}

watch(exerciseId, resetQuiz, { immediate: true })

function selectAnswer(questionIndex: number, answer: string) {
  selectedAnswers.value[questionIndex] = answer
}

const correctCount = computed(() =>
  quizQuestions.value.reduce((count, question, index) => {
    return count + (selectedAnswers.value[index] === question.answer ? 1 : 0)
  }, 0),
)
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

      <article v-if="(isLesson1 || isLesson2 || isLesson3 || isLesson4 || isLesson5 || isLesson6) && exercise" class="exercise-help">
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

        <div class="exercise-help-card quiz-card">
          <div class="quiz-header">
            <div>
              <p class="eyebrow">Självtest</p>
              <h3>Rätt svar: {{ correctCount }} / {{ quizQuestions.length }}</h3>
            </div>
            <button class="control-button" @click="resetQuiz">Nollställ</button>
          </div>

          <div class="quiz-list">
            <article v-for="(question, questionIndex) in quizQuestions" :key="question.question" class="quiz-item">
              <p class="quiz-question">{{ questionIndex + 1 }}. {{ question.question }}</p>
              <div class="option-list quiz-options">
                <button
                  v-for="(option, optionIndex) in question.options"
                  :key="option"
                  class="option-button"
                  :class="{
                    selected: selectedAnswers[questionIndex] === option,
                    correct: selectedAnswers[questionIndex] !== null && option === question.answer,
                    incorrect:
                      selectedAnswers[questionIndex] === option && option !== question.answer,
                  }"
                  @click="selectAnswer(questionIndex, option)"
                >
                  <span class="option-letter">{{ String.fromCharCode(65 + optionIndex) }}</span>
                  <span>{{ option }}</span>
                </button>
              </div>
              <p v-if="selectedAnswers[questionIndex] !== null" class="answer-feedback" :class="{ correct: selectedAnswers[questionIndex] === question.answer }">
                {{ selectedAnswers[questionIndex] === question.answer ? 'Rätt svar!' : `Rätt svar är: ${question.answer}` }}
              </p>
            </article>
          </div>
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
