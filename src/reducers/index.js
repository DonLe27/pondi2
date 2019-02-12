import {combineReducers} from 'redux';
import auth from './auth.js';

const pondiApp = combineReducers({
    auth: auth,
});

export default pondiApp;