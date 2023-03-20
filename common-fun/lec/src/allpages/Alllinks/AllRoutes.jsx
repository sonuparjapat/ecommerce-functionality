import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Admin from '../Admin'
import Cart from '../Cart'
import Homepage from '../Homepage'
import Login from '../Login'
import PrivateRoute from '../Private'
import Singlepage from '../Singlepage'
import Alllinks from './Alllinks'

export default function AllRoutes() {
  return (
    <div>
        <Alllinks/>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
            <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
            <Route path="/extra/:id" element={<Singlepage/>}></Route>
            <Route path="*" element={<h3>Not found</h3>}></Route>
            
  
            
  

        </Routes>
    </div>
  )
}
