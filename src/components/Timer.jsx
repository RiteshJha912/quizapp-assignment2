import { useEffect, useState } from 'react'
import styles from '../styles/Timer.module.css'

function Timer({ duration, onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout()
      return
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, onTimeout])

  return <h3 className={styles.timer}>Time Left: {timeLeft}s</h3>
}

export default Timer
