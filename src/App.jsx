import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify' // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css' // Import toast styles
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Results from './pages/Results'
import styles from './styles/App.module.css'

function App() {
  return (
    <Router>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link to='/' className={styles.navLink}>
            Home
          </Link>
          <Link to='/results' className={styles.navLink}>
            Past Scores
          </Link>
        </div>
      </nav>

      <div className={styles.pageContent}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/results' element={<Results />} />
        </Routes>
      </div>

      {/* Add the ToastContainer to display toast notifications */}
      <ToastContainer position='top-center' autoClose={3000} />
    </Router>
  )
}

export default App
