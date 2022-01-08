import types from './phonebook-types';
import { nanoid } from 'nanoid';

const addContact = (name, number) => ({
  type: types.CONTACT_ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: types.CONTACT_DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CONTACT_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
