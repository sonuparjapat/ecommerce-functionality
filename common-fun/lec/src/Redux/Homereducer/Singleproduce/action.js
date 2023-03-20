import axios from "axios"
import { GET_SINGLE_SUCCESS } from "./actionType"

export const getsingledata=(payload)=>{
    return {type:GET_SINGLE_SUCCESS,payload}
}
export const singledata=(id)=>(dispatch)=>{
axios.get(`https://cute-red-fossa-slip.cyclic.app/ecommercefun/${id}`).then((res)=>dispatch(getsingledata(res.data)))
}