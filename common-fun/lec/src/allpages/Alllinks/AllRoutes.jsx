import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Admin from '../Admin'
import Cart from '../Cart'
import Homepage from '../Homepage'
import Login from '../Login'
import Alllinks from './Alllinks'

export default function AllRoutes() {
  return (
    <div>
        <Alllinks/>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="*" element={<h3>Not found</h3>}></Route>
            
  
            
  

        </Routes>
    </div>
  )
}
