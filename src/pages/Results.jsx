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
      <h1 className={styles.title}>Quiz Results</h1>

      {quizHistory.length === 0 ? (
        <p className={styles.noHistory}>No quiz attempts recorded yet.</p>
      ) : (
        <div className={styles.historyWrapper}>
          {quizHistory.map((attempt, index) => (
            <div key={index} className={styles.historyItem}>
              <div className={styles.date}>
                {new Date(attempt.date).toLocaleString()}
              </div>
              <div className={styles.score}>
                <strong>Score:</strong> {attempt.score}/{attempt.total}
              </div>
            </div>
          ))}
        </div>
      )}

      <Link to='/'>
        <button className={styles.button}>Take Another Quiz</button>
      </Link>
    </div>
  )
}

export default Results
