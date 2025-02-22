import React from 'react'
import { Link } from 'react-router-dom'

const QuizResult = ({ score, total }) => {
  return (
    <div className='quiz-result'>
      <h1>Quiz Completed!</h1>
      <p>
        Your Score: {score} / {total}
      </p>

      <div className='result-actions'>
        <Link to='/'>
          <button>Take Another Quiz</button>
        </Link>
        <Link to='/results'>
          <button>View All Scores</button>
        </Link>
      </div>
    </div>
  )
}

export default QuizResult
