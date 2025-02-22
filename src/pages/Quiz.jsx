import { useState } from 'react'
import Question from '../components/Question'
import Timer from '../components/Timer'
import Scoreboard from '../components/scoreboard'
import styles from '../styles/Quiz.module.css'

const quizData = [
  {
    question: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Mercury', 'Earth', 'Mars'],
    correct: 'Mercury',
  },
  {
    question: 'Which data structure organizes items in a FIFO manner?',
    options: ['Stack', 'Queue', 'Tree', 'Graph'],
    correct: 'Queue',
  },
  {
    question:
      'Which of the following is primarily used for structuring web pages?',
    options: ['Python', 'Java', 'HTML', 'C++'],
    correct: 'HTML',
  },
  {
    question: 'Which chemical symbol stands for Gold?',
    options: ['Au', 'Gd', 'Ag', 'Pt'],
    correct: 'Au',
  },
  {
    question:
      'Which of these processes is not typically involved in refining petroleum?',
    options: [
      'Fractional distillation',
      'Cracking',
      'Polymerization',
      'Filtration',
    ],
    correct: 'Filtration',
  },
]

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prevScore) => prevScore + 1)
    setShowFeedback(true)
    setTimeout(() => {
      setShowFeedback(false)
      if (currentQuestion + 1 < quizData.length)
        setCurrentQuestion((prev) => prev + 1)
      else setQuizCompleted(true)
    }, 1000)
  }

  const handleTimeout = () => {
    setShowFeedback(false)
    if (currentQuestion + 1 < quizData.length)
      setCurrentQuestion((prev) => prev + 1)
    else setQuizCompleted(true)
  }

  return (
    <div className={styles.container}>
      {quizCompleted ? (
        <Scoreboard score={score} total={quizData.length} />
      ) : (
        <div>
          <Timer duration={30} onTimeout={handleTimeout} />
          <Question
            data={quizData[currentQuestion]}
            onAnswer={handleAnswer}
            showFeedback={showFeedback}
          />
        </div>
      )}
    </div>
  )
}

export default Quiz
