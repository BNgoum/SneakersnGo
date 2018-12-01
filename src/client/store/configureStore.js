import { createStore, combineReducers } from 'redux';

import AuthenticationReducer from './reducers/user/reducer';
//import SetSignUp from './Reducers/SetSignUp';

export default createStore(AuthenticationReducer);