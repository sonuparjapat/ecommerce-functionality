import { GET_HOME_FAILURE, GET_HOME_REQUEST, GET_HOME_SUCCESS } from "./actionTypes"

export const  initialState = {
    isLoading:false,
    isError:false,
    homedata:[]

}

export const reducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_HOME_REQUEST:
    return { ...state,isLoading:true,isError:false,homedata:[] }
    case GET_HOME_SUCCESS:{
        return {...state,isLoading:false,isError:false,homedata:payload}
    }
    case GET_HOME_FAILURE:{
        return {...state,isLoading:false,isError:true,homedata:[]}
    }

  default:
    return state
  }
}
