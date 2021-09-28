import {all, put, takeEvery } from 'redux-saga/effects'
import { logIn, logOut } from '../redux/actions';
async function* logoutRequest(){
    try {
        //To display Loading Indc in Screen 
        yield put({type:'Loading'});  


        const data = yield call(() => {
          return fetch(
            'url',
            {
              method: 'GET',
              headers: {
                'X-ACCESS-TOKEN':
                  'eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9kdWN0X2NvZGUiOiJ6ZWU1QDk3NSIsInBsYXRmb3JtX2NvZGUiOiJyb2t1QHBwQDEyMyIsImlzc3VlZEF0IjoiMjAyMS0wMi0wNlQwMDozMDowMiswMDAwIiwidHRsIjo4NjQwMH0.E1fvlJgjOvyzHFVCh8RU2K5vCxV6jon2-ORHH1ak7Ts',
              },
            },
          ).then((res) => res.json());
        });
        //if success Dispatching the response to reducer
        yield put({type:'jsonRes',payload:data});
      } catch (error) {
        //if success Dispatching the errorResponse to reducer
        yield put({type:'error',payload:error});
      }
      
     
}

async function* loginRequest(){
    try {
        //To display Loading Indc in Screen 
        yield put({type:'Loading'});  
        const data = yield call(() => {
          return fetch(
            'url',
            {
              method: 'GET',
              headers: {
                'X-ACCESS-TOKEN':
                  'eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9kdWN0X2NvZGUiOiJ6ZWU1QDk3NSIsInBsYXRmb3JtX2NvZGUiOiJyb2t1QHBwQDEyMyIsImlzc3VlZEF0IjoiMjAyMS0wMi0wNlQwMDozMDowMiswMDAwIiwidHRsIjo4NjQwMH0.E1fvlJgjOvyzHFVCh8RU2K5vCxV6jon2-ORHH1ak7Ts',
              },
            },
          ).then((res) => res.json());
        });
        //if success Dispatching the response to reducer
        yield put({type:'jsonRes',payload:data});
      } catch (error) {
        //if success Dispatching the errorResponse to reducer
        yield put({type:'error',payload:error});
      }
      
     
}

//Watcher Sagas
function* loginSaga(){
    yield takeEvery('login',loginRequest)
}
function* logoutSaga(){
    yield takeEvery('logout',logoutRequest)
}

//Root Saga Here Parallelly all the Saga will run
function* rootSaga(){
    yield all([

        loginSaga(),
        logoutSaga()   
    ])
}
export default rootSaga;