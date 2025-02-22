import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to='/quiz'>
          <button>Start Quiz</button>
        </Link>
        <Link to='/results'>
          <button>View Score</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
