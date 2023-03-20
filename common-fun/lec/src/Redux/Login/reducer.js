import { LOGINFAILURE, LOGINREQUEST, LOGINSUCCESS } from "./actionTypes"
const initialstate={
    isLoading:false,
    isError:false,
    auth:false,
    token:""
}
export const reducer=(state=initialstate,action)=>{
    const{type,payload}=action

    switch(type){
        case LOGINREQUEST:{
return {...state,isLoading:true,isError:false,auth:false,token:""}
        }
        case LOGINSUCCESS:{
            return {...state,isLoading:false,isError:false,auth:true,token:payload}
        }
        case LOGINFAILURE:{
            return {...state,isLoading:false,isError:false,auth:false,token:""}
        }
        default:{
            return state
        }
    }
}