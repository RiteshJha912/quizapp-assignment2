import { useEffect, useState } from 'react'
import { getQuizHistory } from '../utils/db'

function Results() {
  const [quizHistory, setQuizHistory] = useState([])

  useEffect(() => {
    async function fetchHistory() {
      const history = await getQuizHistory()
      setQuizHistory(history.reverse()) // Show the latest attempt first
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
              <strong>{new Date(attempt.date).toLocaleString()}</strong>- Score:{' '}
              {attempt.score}/{attempt.total}
            </li>
          ))}
        </ul>
      )}

      <a href='/'>Take Another Quiz</a>
    </div>
  )
}

export default Results
