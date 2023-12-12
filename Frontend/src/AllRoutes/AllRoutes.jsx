import React from 'react'
import {Routes,Route,Link, Router} from "react-router-dom"
import { Home } from '../Pages/Home'
import { AllProduct } from '../Pages/AllProduct'
import { ScheduleAppoinment } from '../Pages/ScheduleAppoinment'
import { SelfAssessment } from '../Pages/SelfAssessment'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import { ForgotPassword } from '../Pages/ForgotPassword'
import { ResetPassword } from '../Pages/ResetPassword'
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/all-products' element={<AllProduct/>}/>
            <Route path='/schedule-appoinment' element={<ScheduleAppoinment/>} />
            <Route path='/self-assessment' element={<SelfAssessment/>} />
        </Routes>
    </div>
  )
}
