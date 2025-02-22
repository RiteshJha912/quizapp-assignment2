/*
  This file defines a React component called `Question`.

  - It displays a question based on the provided `question` prop.
  - It supports two types of questions: 
    1. Multiple-choice (MCQ) 
    2. Integer input (numeric answers)
  - For MCQs, buttons are rendered for each option.
  - For integer input, an input field is displayed with a submit button.
  - Uses `react-toastify` to display error messages when input is empty.
  - Calls `onAnswer` when an answer is selected or submitted.

  Props:
  - `question` (Object): Contains question text, type, options (if MCQ), and ID.
  - `onAnswer` (Function): Handles user responses.
  - `userInput` (String): Stores the current user input.
  - `setUserInput` (Function): Updates `userInput`.

  Usage Example:
  <Question 
    question={sampleQuestion} 
    onAnswer={handleAnswer} 
    userInput={userInput} 
    setUserInput={setUserInput} 
  />
*/

import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from '../styles/Question.module.css'

const Question = ({ question, onAnswer, userInput, setUserInput }) => {
  // Handles the submission of an integer-based answer
  const handleSubmit = () => {
    if (!userInput.trim()) {
      toast.error('Input cannot be empty! Enter a value to proceed.')
      return
    }
    onAnswer(question.id, userInput) // Passes the answer to the parent component
  }

  return (
    <div className={styles.questionContainer}>
      <h2 className={styles.questionText}>{question.question}</h2>

      {/* Renders multiple-choice options if the question type is MCQ */}
      {question.type === 'mcq' ? (
        <div className={styles.options}>
          {question.options.map((option) => (
            <button
              key={option}
              className={styles.option}
              onClick={() => onAnswer(question.id, option[0])} // Extracts the first character (option letter)
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        // Renders an input field for integer-based questions
        <div className={styles.integerInput}>
          <input
            type='number'
            className={styles.inputBox}
            placeholder=''
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
