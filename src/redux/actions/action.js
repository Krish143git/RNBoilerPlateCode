import {LOG_IN, LOG_OUT} from './actionType'

export const logIn = (dispatch,payLoad) => {
    dispatch({type: LOG_IN , payLoad})
};
export const logOut = (dispatch,payLoad) => {
    dispatch({type: LOG_OUT , payLoad})
};