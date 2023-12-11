import React from 'react'
import {Routes,Route,Link, Router} from "react-router-dom"
import { Home } from '../Pages/Home'
import { AllProduct } from '../Pages/AllProduct'
import { ScheduleAppoinment } from '../Pages/ScheduleAppoinment'
import { SelfAssessment } from '../Pages/SelfAssessment'
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/all-products' element={<AllProduct/>}/>
            <Route path='/schedule-appoinment' element={<ScheduleAppoinment/>} />
            <Route path='/self-assessment' element={<SelfAssessment/>} />
        </Routes>
    </div>
  )
}
