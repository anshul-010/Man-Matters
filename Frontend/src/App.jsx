import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './Pages/Login'
import { Signup } from './Pages/Signup'

function App() {

  return (
    <>
      <Login/>
      <Signup/>
    </>
  )
}

export default App
