//src/components/QuizResult.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/QuizResult.module.css'

const QuizResult = ({ score, total }) => {
  return (
    <div className={styles.quizResult}>
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
