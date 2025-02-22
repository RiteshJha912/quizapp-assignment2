/*
  This file defines the `Quiz` component, which manages the entire quiz flow.

  Features:
  - Fetches quiz questions from an external JSON file.
  - Implements a step-by-step question system with a progress bar.
  - Tracks user input, score, and quiz completion status.
  - Uses a timer for each question and handles timeout scenarios.
  - Saves quiz results locally using a utility function.

  Usage:
  - Displays quiz rules before starting.
  - Once started, shows one question at a time.
  - Ends with a result screen after all questions are answered.

  Dependencies:
  - `Question`: Displays a single question.
  - `Timer`: Manages countdown for each question.
  - `QuizResult`: Shows final results after quiz completion.
  - `ProgressBar`: Visually tracks quiz progress.
  - `saveQuizResult`: Utility function to store quiz scores.
  - External CSS module for styling.
*/

import React, { useEffect, useState } from 'react'
import Question from '../components/Question'
import Timer from '../components/Timer'
import QuizResult from '../components/QuizResult'
import ProgressBar from '../components/ProgressBar'
import { saveQuizResult } from '../utils/db'
import styles from '../styles/Quiz.module.css'

const Quiz = () => {
  // State to store quiz questions
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [quizStarted, setQuizStarted] = useState(false)

  // Fetch quiz questions from an external file on component mount
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch('/data/questions.json')
        const data = await response.json()
        setQuestions(data)
      } catch (error) {
        console.error('Error loading questions:', error)
      }
    }
    fetchQuestions()
  }, [])

  // Reset user input when moving to the next question
  useEffect(() => {
    setUserInput('')
  }, [currentIndex])

  // Handle user answer submission
  const handleAnswer = (questionId, userAnswer) => {
    const currentQuestion = questions[currentIndex]
    if (!currentQuestion) return

    // Check if the answer is correct (supports MCQ and text input)
    const isCorrect =
      currentQuestion.type === 'mcq'
        ? userAnswer === currentQuestion.correctAnswer
        : userAnswer === currentQuestion.correctAnswer.toString()

    // Update score if correct
    if (isCorrect) setScore((prev) => prev + 1)

    // Move to the next question or complete the quiz
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setQuizCompleted(true)
      saveQuizResult(score + (isCorrect ? 1 : 0), questions.length)
    }
  }

  // Handle timeout when a user doesn't answer within the given time
  const handleTimeout = () => {
    handleAnswer(questions[currentIndex]?.id, null)
  }

  // Show the result screen when the quiz is completed
  if (quizCompleted) {
    return <QuizResult score={score} total={questions.length} />
  }

  // Show the rules screen before the quiz starts
  if (!quizStarted) {
    return (
      <div className={styles.rulesContainer}>
        <h2>Quiz Rules</h2>
        <ul className={styles.rulesList}>
          <li>You have limited time for each question.</li>
          <li>Once you submit an answer, you can't go back.</li>
          <li>Each correct answer gives you 1 point.</li>
          <li>If time runs out, you lose the chance to answer.</li>
        </ul>
        <button
          className={styles.startButton}
          onClick={() => setQuizStarted(true)}
        >
          Start Quiz
        </button>
      </div>
    )
  }

  // Render the quiz interface
  return (
    <div className={styles.quizContainer}>
      {questions.length > 0 ? (
        <>
          {/* Display progress bar */}
          <ProgressBar progress={(currentIndex / questions.length) * 100} />

          {/* Timer for current question */}
          <Timer
            key={currentIndex}
            duration={questions[currentIndex]?.time || 30}
            onTimeout={handleTimeout}
          />

          {/* Render the current question */}
          <Question
            question={questions[currentIndex]}
            onAnswer={handleAnswer}
            userInput={userInput}
            setUserInput={setUserInput}
          />
        </>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  )
}

export default Quiz
