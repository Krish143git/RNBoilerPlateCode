import { combineReducers } from 'redux';
import {LogInReducer} from './logIn';
import {LogOutReducer} from './logOut';

const rootReducer = combineReducers({
    logIn : LogInReducer,
    logOut : LogOutReducer
}) 
export default rootReducer;