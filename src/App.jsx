import {  Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import CounterApp from './pages/CounterApp'
import QuizApp from './pages/QuizApp'
import QuizAppQuestions from './pages/QuizAppQuestions'
import ColorSwitcher from './pages/ColorSwitcher'
import "./App.css"

function App(){

  return(

    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/quiz-app" element={<QuizApp />} />
        <Route path="/quiz-app-questions" element={<QuizAppQuestions />} />
        <Route path="/color-switcher-app" element={<ColorSwitcher />} />

       
        

      </Routes>

    </div>
  )
}

export default App