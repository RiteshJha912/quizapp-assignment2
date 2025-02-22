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

    const timeout = setTimeout(showToast, 100) // Delay to prevent double firing

    return () => clearTimeout(timeout) // Cleanup to prevent duplicate calls
  }, [score, total])

  return (
    <div className={styles.quizResult}>
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
