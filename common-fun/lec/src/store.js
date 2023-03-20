import { applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import {reducer as homereducer} from "./Redux/Homereducer/reducer"
import { legacy_createStore } from "redux"
const rootreducer=combineReducers({homereducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))