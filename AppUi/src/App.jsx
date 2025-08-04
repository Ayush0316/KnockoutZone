import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './routes'
import Background from './components/Background/background'
// import './App.css'
import './components/Background/background.css'; 

function App() {
  return (
    <BrowserRouter>
    <Background/>
      <AllRoutes />
    </BrowserRouter>
  )
}

export default App
