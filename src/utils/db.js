import { openDB } from 'idb'

const DB_NAME = 'quizDB'
const STORE_NAME = 'quizHistory'

// Open IndexedDB database
const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true })
    }
  },
})

// Function to save quiz result
export const saveQuizResult = async (result) => {
  const db = await dbPromise
  await db.add(STORE_NAME, result)
}

// Function to get all past quiz results
export const getQuizHistory = async () => {
  const db = await dbPromise
  return await db.getAll(STORE_NAME)
}
