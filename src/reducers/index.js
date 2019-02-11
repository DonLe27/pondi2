import {combineReducers} from 'redux';
//import {routerReducer} from 'react-router-redux';
import auth from './auth.js';

const pondiApp = combineReducers({
    auth: auth,
    //router: routerReducer
});

export default pondiApp;