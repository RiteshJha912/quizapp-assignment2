import styles from '../styles/Scoreboard.module.css'

function Scoreboard({ score, total }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Quiz Completed!</h2>
      <p className={styles.scoreText}>
        Your Score: {score} / {total}
      </p>
      <button
        className={styles.restartButton}
        onClick={() => window.location.reload()}
      >
        Restart Quiz
      </button>
    </div>
  )
}

export default Scoreboard
