import styles from '../styles/Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Quiz</h1>
      <div className={styles.buttonGroup}>
        <Link to='/quiz'>
          <button className={styles.button}>Start Quiz</button>
        </Link>
        <Link to='/results'>
          <button className={styles.button}>View Score</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
