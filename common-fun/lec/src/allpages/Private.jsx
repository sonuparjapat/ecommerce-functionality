import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export default function PrivateRoute({children}) {
    const data=useSelector((state)=>state.loginreducer.auth)
    console.log(data)
    const location=useLocation()
if(data==false){
    return <Navigate to="/login" state={location.pathname} replace/>
}
return children

}
