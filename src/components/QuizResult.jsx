/*
  This file defines the `QuizResult` component, which displays the final score 
  after a quiz is completed.

  - It provides a summary of the user's performance.
  - Displays a confetti animation if the user gets full marks.
  - Uses `react-toastify` to show different toast messages based on the score.
  - Includes a button to retake the quiz.

  Props:
  - `score` (Number): The user's final score.
  - `total` (Number): The total number of questions.

  Features:
  - Shows success message for full marks, encouragement for lower scores.
  - Uses `useEffect` to trigger toasts when the score changes.
  - Provides a link to restart the quiz.

  Usage Example:
  <QuizResult score={8} total={10} />
*/



import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from '../styles/QuizResult.module.css'

const QuizResult = ({ score, total }) => {
  const width = window.innerWidth
  const height = window.innerHeight

  useEffect(() => {
    const showToast = () => {
      if (score === total) {
        toast.success('Amazing! You got full marks! 🎉', {
          toastId: 'fullMarks',
        })
      } else if (score >= 5 && score < total) {
        toast.info('Good job! Keep improving! 💪', { toastId: 'midMarks' })
      } else {
        toast.warn("Don't give up! Try again! 🔥", { toastId: 'lowMarks' })
      }
    }

    const timeout = setTimeout(showToast, 100) // Delays the toast display slightly for better UX

    return () => clearTimeout(timeout) // Cleanup function to avoid memory leaks
  }, [score, total])

  return (
    <div className={styles.quizResult}>
      {/* Display confetti animation only if the user scores full marks */}
      {score === total && <Confetti width={width} height={height} />}

      <h1>Quiz Completed!</h1>
      <p>
        Your Score: {score} / {total}
      </p>

      
      <div className={styles.resultActions}>
        <Link to='/'>
          <button>Take Another Quiz</button>
        </Link>
      </div>
    </div>
  )
}

export default QuizResult
