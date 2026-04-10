import {  Route , Routes } from 'react-router-dom'
import CounterApp from './pages/CounterApp'
import Home from './pages/Home'
import "./App.css"
function App(){

  return(

    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter-app" element={<CounterApp />} />
      </Routes>

    </div>
  )
}

export default App