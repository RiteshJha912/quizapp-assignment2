/*
  This file defines the `Timer` component, which is a countdown timer used in the quiz.

  - It starts counting down from the given `duration` in seconds.
  - When the time reaches zero, it triggers the `onTimeout` function.
  - It visually highlights when the remaining time is critical (≤ 5 seconds).
  - Uses `useEffect` to update the timer every second.

  Props:
  - `duration` (Number): The initial countdown duration in seconds.
  - `onTimeout` (Function): A callback function executed when the timer reaches zero.

  Features:
  - Updates time dynamically using `useState`.
  - Implements `useEffect` to decrement the time every second.
  - Clears the timer when the component unmounts or when timeLeft reaches zero.

  Usage Example:
  <Timer duration={30} onTimeout={() => alert("Time's up!")} />
*/


import { useEffect, useState } from 'react'
import styles from '../styles/Timer.module.css'

function Timer({ duration, onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const percentage = (timeLeft / duration) * 100

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout()
      return
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, onTimeout])

  return (
    <div className={styles.timerContainer}>
      <svg className={styles.timerCircle} width='100' height='100'>
        <circle cx='50' cy='50' r='40' className={styles.timerBackground} />
        <circle
          cx='50'
          cy='50'
          r='40'
          className={styles.timerProgress}
          style={{
            strokeDashoffset: `calc(251 - (251 * ${percentage}) / 100)`,
          }}
        />
      </svg>
      <div
        className={`${styles.timerText} ${
          timeLeft <= 5 ? styles.critical : ''
        }`}
      >
        {timeLeft}s
      </div>
    </div>
  )
}

export default Timer
