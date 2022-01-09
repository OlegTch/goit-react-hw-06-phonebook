import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactsActions } from './phonebook-actions';
import dataContacts from '../../data/contacts.json';

const items = createReducer(dataContacts, {
  [contactsActions.addContact]: (state, { payload }) => [payload, ...state],
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
