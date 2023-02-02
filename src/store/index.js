import {createStore, applyMiddleware, combineReducers} from "redux";
import todosReducer from './reducers/';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    todos: todosReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
