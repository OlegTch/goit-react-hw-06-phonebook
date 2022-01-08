import { combineReducers } from 'redux';
import types from './phonebook-types';
import dataContacts from '../../data/contacts.json';

const items = (state = dataContacts, { type, payload }) => {
  switch (type) {
    case types.CONTACT_ADD:
      console.log([...state, payload]);
      return [payload, ...state];
    case types.CONTACT_DELETE:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CONTACT_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});

// const checkContacts = contacts.find(
//   contact => name.toLowerCase() === contact.name.toLowerCase(),
// );

// const checkContactsNumber = contacts.find(
//   contact => number.toLowerCase() === contact.number.toLowerCase(),
// );

// if (checkContacts) {
//   return onError(`${checkContacts.name}`);
// }

// if (checkContactsNumber) {
//   return onError(`${checkContactsNumber.number}`);
// }

// const onError = checkContacts => {
//   const message = `${checkContacts} is already in contacts`;
//   alert(message);
// };
