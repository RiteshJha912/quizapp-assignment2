import styles from '../styles/Results.module.css'

function Results() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quiz Results</h1>
      <p className={styles.scoreText}>Your score will be displayed here.</p>
    </div>
  )
}

export default Results
