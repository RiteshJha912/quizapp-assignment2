import { useState, useEffect } from 'react'

function Quiz() {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch('/data/questions.json') // Correct path
        if (!response.ok) {
          throw new Error('Failed to fetch questions')
        }
        const data = await response.json()
        setQuestions(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchQuestions()
  }, [])


  if (questions.length === 0) return <p>Loading questions...</p>

  const handleAnswer = (index) => {
    if (questions[currentQuestion].answer === index) {
      setScore(score + 1)
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsCompleted(true)
    }
  }

  return (
    <div className='quiz-container'>
      {isCompleted ? (
        <h2>
          Your final score: {score}/{questions.length}
        </h2>
      ) : (
        <>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswer(index)}>
                {option}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Quiz
