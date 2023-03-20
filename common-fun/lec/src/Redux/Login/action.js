import { LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS } from "./actionTypes"
import axios from "axios"
export const loginrequesting=()=>{
    return {type:LOGINREQUEST}
}
export const loginsuccessing=(payload)=>{
    return {type:LOGINSUCCESS,payload}
}
export const loginfaling=()=>{
    return {type:LOGINFAILURE}
}
export const login=(obj)=>(dispatch)=>{
    console.log(obj)
    dispatch(loginrequesting())
 
    return  axios({
        method: 'post',
        url:"https://reqres.in/api/login",
        data:obj
      })
    .then((res)=>
    {

    
    dispatch(loginsuccessing(res.data.token))
    alert("login successfully")

}).catch((error)=>{
        alert("!login failed")
        dispatch(loginfaling())})
}