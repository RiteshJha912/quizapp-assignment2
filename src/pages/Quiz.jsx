//src/pages/Quiz.jsx

import React, { useEffect, useState } from 'react'
import Question from '../components/Question'
import Timer from '../components/Timer'
import QuizResult from '../components/QuizResult'
import { saveQuizResult } from '../utils/db'
import styles from '../styles/Quiz.module.css'

const Quiz = () => {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [userInput, setUserInput] = useState('')

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

  useEffect(() => {
    setUserInput('')
  }, [currentIndex])

  const handleAnswer = (questionId, userAnswer) => {
    const currentQuestion = questions[currentIndex]
    if (!currentQuestion) return

    const isCorrect =
      currentQuestion.type === 'mcq'
        ? userAnswer === currentQuestion.correctAnswer
        : userAnswer === currentQuestion.correctAnswer.toString()

    if (isCorrect) setScore((prev) => prev + 1)

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setQuizCompleted(true)
      saveQuizResult(score + (isCorrect ? 1 : 0), questions.length)
    }
  }

  const handleTimeout = () => {
    handleAnswer(questions[currentIndex]?.id, null)
  }

  if (quizCompleted) {
    return <QuizResult score={score} total={questions.length} />
  }

  return (
    <div className={styles.quizContainer}>
      {questions.length > 0 ? (
        <>
          <Timer
            key={currentIndex}
            duration={questions[currentIndex]?.time || 30}
            onTimeout={handleTimeout}
          />
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
