# Quiz App : Dacoid Digital

A simple quiz application built with **React** that supports **multiple-choice** and **integer-type** questions. It features a **timer**, tracks scores, and stores quiz history.

###  🔗 Live Demo : https://dacoid-quizapp.vercel.app/

---

## 📋 Features

**Interactive Quiz Flow**: Users can start a quiz, answer questions, and receive instant feedback.   
**Multiple Question Types**: Supports multiple-choice and text-input questions.   
**Real-Time Timer**: Countdown for each question, enforcing time-based challenges.   
**Score Tracking**: Displays the current score and final results.    
**Quiz History**: Stores past attempts and displays results for user review.    
**Progress Bar**: Shows how far the user has progressed in the quiz.    
**Basic Navigation**: Users can start a new quiz or view past results.      

**Confetti Celebration** 🎉: A confetti animation appears if the user gets a perfect score.   
**Dynamic Toast Notifications**: Real-time feedback using toast messages based on user performance.   
**Auto-Saving Results**: Quiz results are automatically saved to local storage for future reference.    
**Input Reset on Question Change**: Ensures smooth user experience when switching questions.    
**Custom Styled Components**: Uses modular CSS for a polished, professional UI.  

---

## ⚙️ Installation & Running Locally

### **Clone the Repository**
```
git clone https://github.com/RiteshJha912/quizapp-assignment2.git
cd quiz-app
```

### Install Dependencies
```
npm install
```

### Run the App
```
npm run dev
```

Then, open http://localhost:5173/ in your browser.

---
## 🗂️ Folder Structure
```
quiz-app/
│── public/
│   ├── data/
│   │   ├── questions.json
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── ProgressBar.jsx
│   │   ├── Question.jsx
│   │   ├── QuizResult.jsx
│   │   ├── Timer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Quiz.jsx
│   │   ├── Results.jsx
│   ├── styles/
│   │   ├── App.module.css
│   │   ├── global.css
│   │   ├── Home.module.css
│   │   ├── Progressbar.module.css
│   │   ├── Question.module.css
│   │   ├── Quiz.module.css
│   │   ├── QuizResult.module.css
│   │   ├── Results.module.css
│   │   ├── Timer.module.css
│   ├── utils/
│   │   ├── db.js
│   ├── App.jsx
│   ├── Main.jsx
│── README.md
│── package.json
│── vite.config.js
```

## 📦 Libraries Used
**Core React Libraries**    
react – Core library for building UI components.    
react-dom – Allows React to render components in the DOM.   
react-router-dom – Enables client-side routing for navigation.   

**State & Side Effects**    
react-toastify – Provides toast notifications for feedback messages.   
react-confetti – Adds a confetti animation when users achieve a perfect score.  

**Icons & UI Enhancements**    
react-icons – Includes various icons, such as play and history icons for navigation.    

**Styling**    
css-modules – Used for component-specific styling with .module.css files.     

**Data Handling & Storage**    
fetch API (built-in) – Used to load quiz questions from a JSON file.    
localStorage (built-in) – Saves past quiz results for later review.    


## 💼 Wanna Collaborate?
Have ideas to improve this project? Let's make it even better together!     
Drop me a message at ritesh.exe@proton.me 