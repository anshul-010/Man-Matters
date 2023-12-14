import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './Pages/Login'
import { Signup } from './Pages/Signup'
import { AllRoutes } from './AllRoutes/AllRoutes'
import { Home } from './Pages/Home'
import Navbar from './Componants/Navebar'
import {Footer} from './Componants/Footer'
import { AllProduct } from './Pages/AllProduct'
import { Home2 } from './Pages/Home2'



function App() {

  return (
    <>
      <Navbar/>
      <Home2/>
      <Footer/>
    </>
  )
}

export default App
