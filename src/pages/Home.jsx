import { Link } from 'react-router-dom'
import { AiOutlinePlayCircle, AiOutlineHistory } from 'react-icons/ai' // Import icons
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Quiz</h1>
      <p className={styles.subtitle}>
        Test your knowledge and challenge yourself!
      </p>

      <div className={styles.buttonGroup}>
        <Link to='/quiz'>
          <button className={styles.button}>
            <AiOutlinePlayCircle className={styles.icon} /> Start Quiz
          </button>
        </Link>
        <Link to='/results'>
          <button className={styles.button}>
            <AiOutlineHistory className={styles.icon} /> Past Scores
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
