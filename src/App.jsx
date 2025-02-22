import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AiOutlineHome } from 'react-icons/ai' // Import Home icon
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Results from './pages/Results'
import styles from './styles/App.module.css'

function App() {
  return (
    <Router>
      {/* Home button always visible in the top left corner */}
      <Link to='/' className={styles.homeButton}>
        <AiOutlineHome size={30} />
      </Link>

      <div className={styles.pageContent}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/results' element={<Results />} />
        </Routes>
      </div>

      <ToastContainer position='top-center' autoClose={3000} />
    </Router>
  )
}

export default App
