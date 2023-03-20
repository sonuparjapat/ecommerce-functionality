import { GET_SINGLE_SUCCESS } from "./actionType"
const initialState={
    singledata:[]
}
export const reducer =(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case GET_SINGLE_SUCCESS:{
            return {...state,singledata:payload}
        }
        default:
         return state
    }
}