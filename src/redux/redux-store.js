import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'

import profileReducer from './reducers/profile-reducer';
import dialogsReducer from './reducers/dialogs-reducer';
import navReducer from './reducers/nav-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    nav: navReducer,
    usersPage: usersReducer,
    auth: authReducer, 
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;