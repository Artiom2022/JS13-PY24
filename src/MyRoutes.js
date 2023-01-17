import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/register/Register'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Register/>}/>

        </Routes>
    </div>
  )
}

export default MyRoutes