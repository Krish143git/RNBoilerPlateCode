let dataState = {'count':0}; 

import {LOG_IN} from '../actions/actionType'

const LogInReducer = (state = dataState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {...state, data: action.data};
        default:
            return state;
    }
};

export {LogInReducer} ;