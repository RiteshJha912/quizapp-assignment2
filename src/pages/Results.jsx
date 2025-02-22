//src/pages/Results.jsx

import { useEffect, useState } from 'react'
import { getQuizHistory } from '../utils/db'
import { Link } from 'react-router-dom'
import styles from '../styles/Results.module.css'

function Results() {
  const [quizHistory, setQuizHistory] = useState([])

  useEffect(() => {
    async function fetchHistory() {
      const history = await getQuizHistory()
      setQuizHistory(history.reverse())
    }
    fetchHistory()
  }, [])

  return (
    <div className={styles.resultsContainer}>
      <h1>Quiz Results</h1>

      {quizHistory.length === 0 ? (
        <p className={styles.noHistory}>No quiz attempts recorded yet.</p>
      ) : (
        <ul className={styles.historyList}>
          {quizHistory.map((attempt, index) => (
            <li key={index} className={styles.historyItem}>
              <span className={styles.date}>
                {new Date(attempt.date).toLocaleString()}
              </span>
              <span className={styles.score}>
                Score: {attempt.score}/{attempt.total}
              </span>
            </li>
          ))}
        </ul>
      )}

      <Link to='/'>
        <button className={styles.button}>Take Another Quiz</button>
      </Link>
    </div>
  )
}

export default Results
