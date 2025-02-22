import React from 'react'

const Question = ({ question, onAnswer, userInput, setUserInput }) => {
  return (
    <div className='question-container'>
      <h2>{question.question}</h2>

      {question.type === 'mcq' ? (
        <div className='options'>
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(question.id, option[0])}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className='integer-input'>
          <input
            type='number'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={() => onAnswer(question.id, userInput)}>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}

export default Question
