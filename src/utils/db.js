export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('QuizDB', 1)

    request.onupgradeneeded = (event) => {
      const db = event.target.result
      if (!db.objectStoreNames.contains('quizResults')) {
        db.createObjectStore('quizResults', {
          keyPath: 'id',
          autoIncrement: true,
        })
      }
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject('Failed to open IndexedDB')
  })
}

// Save quiz attempt
export const saveQuizResult = async (score, total) => {
  const db = await openDB()
  const tx = db.transaction('quizResults', 'readwrite')
  const store = tx.objectStore('quizResults')

  const result = { score, total, date: new Date().toISOString() }
  store.add(result)

  return tx.complete
}

// Fetch all quiz attempts
export const getQuizHistory = async () => {
  const db = await openDB()
  const tx = db.transaction('quizResults', 'readonly')
  const store = tx.objectStore('quizResults')

  return new Promise((resolve) => {
    const request = store.getAll()
    request.onsuccess = () => resolve(request.result || [])
  })
}

// Clear all quiz history
export const clearQuizHistory = async () => {
  const db = await openDB()
  const tx = db.transaction('quizResults', 'readwrite')
  const store = tx.objectStore('quizResults')
  
  store.clear()
  return tx.complete
}
