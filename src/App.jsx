import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Results from './pages/Results'

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/quiz'>Take Quiz</Link>
        <Link to='/results'>View Results</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </Router>
  )
}

export default App
