import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../redux-saga/rootSaga';

 const sagaMiddleWare = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleWare))

//Saga Middle ware Take care all of the Iteration things
sagaMiddleWare.run(rootSaga)

export  {store};