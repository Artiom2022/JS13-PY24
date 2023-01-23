import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/register/Register'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/produts' element={<Home/>}/>
            <Route path='/contats' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default MyRoutes