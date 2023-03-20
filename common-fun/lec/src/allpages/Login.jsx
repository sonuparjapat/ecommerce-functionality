import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { login } from '../Redux/Login/action'
export default function Login() {
  const [email,setEmaiil]=useState("")

  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const location=useLocation()
  const handlesubmit=(e)=>{
    e.preventDefault()
    let obj={
      "email":email,
      "password":password
    }
  dispatch(login(obj)).then((res)=>navigate(location.state,{replace:true}))
  }
  return (
    <div>
    <div>Login</div>
    <form onSubmit={handlesubmit}>
    <input onChange={(e)=>setEmaiil(e.target.value)} placeholder='enteremailid'/>
    <input onChange={(e)=>setPassword(e.target.value)} placeholder='enterpassword'/>
    <input type="submit" /></form>
    </div>
  )
}
