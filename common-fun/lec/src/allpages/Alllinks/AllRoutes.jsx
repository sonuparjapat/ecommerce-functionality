import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from '../Homepage'
import Alllinks from './Alllinks'

export default function AllRoutes() {
  return (
    <div>
        <Alllinks/>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/login" element={<Homepage/>}></Route>
            <Route path="/cart" element={<Homepage/>}></Route>
            <Route path="/admin" element={<Homepage/>}></Route>
            <Route path="*" element={<h3>Not found</h3>}></Route>
            
  
            
  

        </Routes>
    </div>
  )
}
