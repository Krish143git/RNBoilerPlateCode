import {LOG_OUT} from '../actions/actionType'

let dataState = { data: ['userName','its Value'] };

const LogOutReducer = (state = dataState, action) => {
    switch (action.type) {
        case LOG_OUT:
            return {...state, data: action.data};
        default:
            return state;
    }
};

export {LogOutReducer} ;