import { applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import {reducer as homereducer} from "./Redux/Homereducer/reducer"
import { legacy_createStore } from "redux"
import {reducer as singlereducer} from "./Redux/Homereducer/Singleproduce/reducer"
const rootreducer=combineReducers({homereducer,singlereducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))