import { createStore, combineReducers} from 'redux';
import {LOGIN, LOGOUT} from './actions';

const initialState = {
    loggedIn: false,
    user: null
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                user: null
            };
        default:
            return state;        
    }
};

const rootReducer = combineReducers({
    login: loginReducer
});

const store = createStore(rootReducer);

export default store;