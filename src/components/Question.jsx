import React from 'react'
import { toast } from 'react-toastify' // Import toast
import 'react-toastify/dist/ReactToastify.css'
import styles from '../styles/Question.module.css'

const Question = ({ question, onAnswer, userInput, setUserInput }) => {
  const handleSubmit = () => {
    if (!userInput.trim()) {
      toast.error('Input cannot be empty! Enter a value to proceed.')
      return
    }
    onAnswer(question.id, userInput)
  }

  return (
    <div className={styles.questionContainer}>
      <h2 className={styles.questionText}>{question.question}</h2>

      {question.type === 'mcq' ? (
        <div className={styles.options}>
          {question.options.map((option) => (
            <button
              key={option}
              className={styles.option}
              onClick={() => onAnswer(question.id, option[0])}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.integerInput}>
          <input
            type='number'
            className={styles.inputBox}
            placeholder='' // ✅ Added placeholder
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}

export default Question
