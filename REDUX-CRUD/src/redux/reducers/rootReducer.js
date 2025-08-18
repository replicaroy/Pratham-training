import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
import { authReducer } from "./authReducer";
import { userReducer } from "./useReducer";




export const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    user: userReducer
})