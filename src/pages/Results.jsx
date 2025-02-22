/*
  This component displays the quiz history, showing previous attempts and scores.

  Features:
  - Fetches and displays quiz history stored in local storage.
  - Shows each attempt's date, time, and score.
  - Allows users to navigate back to take another quiz.

  Dependencies:
  - `getQuizHistory`: Utility function to fetch stored quiz attempts.
  - `react-router-dom`: Used for navigation via `<Link>`.
  - CSS module for styling.

  Usage:
  - Displays a message if no quiz attempts are found.
  - Lists quiz attempts in reverse order (most recent first).
*/

import { useEffect, useState } from 'react'
import { getQuizHistory } from '../utils/db'
import { Link } from 'react-router-dom'
import styles from '../styles/Results.module.css'

function Results() {
  const [quizHistory, setQuizHistory] = useState([])

  // Fetch quiz history from local storage when the component mounts
  useEffect(() => {
    async function fetchHistory() {
      const history = await getQuizHistory()
      setQuizHistory(history.reverse()) // Reverse to show latest attempts first
    }
    fetchHistory()
  }, [])

  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.title}>Quiz Results</h1>

      {/* Show message if no history is available */}
      {quizHistory.length === 0 ? (
        <p className={styles.noHistory}>No quiz attempts recorded yet.</p>
      ) : (
        <div className={styles.historyWrapper}>
          {quizHistory.map((attempt, index) => (
            <div key={index} className={styles.historyItem}>
              <div className={styles.date}>
                {new Date(attempt.date).toLocaleString()}{' '}
                {/* Format date/time */}
              </div>
              <div className={styles.score}>
                <strong>Score:</strong> {attempt.score}/{attempt.total}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Button to start a new quiz */}
      <Link to='/'>
        <button className={styles.button}>Take Another Quiz</button>
      </Link>
    </div>
  )
}

export default Results
