import { GET_HOME_REQUEST, GET_HOME_SUCCESS } from "./actionTypes"
import axios from "axios"
export const gethomedata=()=>{
    return {type:GET_HOME_REQUEST}
}
export const successhomedata=(payload)=>{
    return {type:GET_HOME_SUCCESS,payload}
}
export const failomedata=()=>{
    return {type:GET_HOME_REQUEST}
}
export const homedata=(dispatch)=>{
    dispatch(gethomedata())
    axios.get("https://cute-red-fossa-slip.cyclic.app/ecommercefun").then((res)=>{
        console.log(res.data)
        dispatch(successhomedata(res.data))
    }).catch((error)=>dispatch(failomedata()))
}