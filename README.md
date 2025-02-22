# Quiz App

A simple quiz application built with **React** that supports **multiple-choice** and **integer-type** questions. It features a **timer**, tracks scores, and stores quiz history.

###  Live Demo : https://dacoid-quizapp.vercel.app/

---

## Features

- **Multiple Question Types:** Supports MCQs and integer-type questions.
- **Timer for Each Question:** Customizable countdown timer (default 30s).
- **Automatic Input Reset:** Clears input fields when switching questions.
- **Quiz Results Page:** Displays results for each attempt separately.
- **Persistent History:** Saves past quiz attempts using IndexedDB.
- **Progress Tracking:** Shows real-time quiz progress.

---

##  Installation & Running Locally

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
##  Folder Structure
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
