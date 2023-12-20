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
import { ProductCard } from './Componants/ProductCard'




function App() {

  return (
    <>
      <Navbar/>
    <ProductCard/>
    
      <Footer/>
      
    </>
  )
}

export default App
