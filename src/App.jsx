import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}


export default App
