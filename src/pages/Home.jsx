/*
  This file defines the `Home` component, which serves as the landing page for the quiz application.

  Features:
  - Displays a welcome message and quiz challenge tagline.
  - Provides navigation buttons to:
    1. Start a new quiz.
    2. View past quiz scores.
  - Uses `react-router-dom` for navigation.
  - Incorporates icons from `react-icons` for better UI.

  Usage:
  - This component is rendered at the root ('/') path.
  - Users can click buttons to start a quiz or check their previous scores.

  Dependencies:
  - `react-router-dom` for navigation.
  - `react-icons` for UI icons.
  - External CSS module for styling.
*/

import { Link } from 'react-router-dom'
import { AiOutlinePlayCircle, AiOutlineHistory } from 'react-icons/ai'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      {/* Main heading for the homepage */}
      <h1 className={styles.title}>Welcome to the Ultimate Quiz Challenge!</h1>

      {/* Subtitle with quiz motivation */}
      <p className={styles.subtitle}>
        🏆 🏆 🏆 🏆 🏆
        <br />
        Unleash Your Inner Genius – Take the Quiz Now!
      </p>

      {/* Button group for navigation */}
      <div className={styles.buttonGroup}>
        {/* Button to start a new quiz */}
        <Link to='/quiz'>
          <button className={styles.button}>
            <AiOutlinePlayCircle className={styles.icon} /> Start Quiz
          </button>
        </Link>

        {/* Button to check past quiz scores */}
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
