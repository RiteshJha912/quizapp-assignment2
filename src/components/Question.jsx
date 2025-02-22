import { useState } from 'react'
import styles from '../styles/Question.module.css'

function Question({ data, onAnswer, showFeedback }) {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = (option) => {
    if (!showFeedback) {
      setSelectedOption(option)
      onAnswer(option === data.correct)
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.question}>{data.question}</h2>
      <div className={styles.optionsContainer}>
        {data.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`${styles.option} ${
              selectedOption === option
                ? option === data.correct
                  ? styles.correct
                  : styles.incorrect
                : ''
            }`}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question
