import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './phonebook/phonebook-reducer.js';

const rootReducer = combineReducers({ contacts: phonebookReducer });

const store = createStore(rootReducer, composeWithDevTools());
export default store;

//
// const store = createStore(reducer, composeWithDevTools(applyMiddleware([])));
