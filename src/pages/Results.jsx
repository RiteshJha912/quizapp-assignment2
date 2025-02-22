import { useEffect, useState } from 'react'
import { getQuizHistory } from '../utils/db'
import { Link } from 'react-router-dom'

function Results() {
  const [quizHistory, setQuizHistory] = useState([])

  useEffect(() => {
    async function fetchHistory() {
      const history = await getQuizHistory()
      setQuizHistory(history.reverse()) // Show latest attempt first
    }
    fetchHistory()
  }, [])

  return (
    <div className='results-container'>
      <h1>Quiz Results</h1>

      {quizHistory.length === 0 ? (
        <p>No quiz attempts recorded yet.</p>
      ) : (
        <ul>
          {quizHistory.map((attempt, index) => (
            <li key={index}>
              <strong>{new Date(attempt.date).toLocaleString()}</strong> -
              Score: {attempt.score}/{attempt.total}
            </li>
          ))}
        </ul>
      )}

      <Link to='/'>
        <button className='button'>Take Another Quiz</button>
      </Link>
    </div>
  )
}

export default Results
