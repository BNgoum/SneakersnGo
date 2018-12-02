import { createStore, combineReducers } from 'redux';

import AuthenticationReducer from './reducers/user/reducer';
import SneakersReducer from './reducers/sneakers/reducer';

const reducers = combineReducers({
    AuthenticationReducer,
    SneakersReducer
})

export default createStore(reducers);