import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contact/Add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contact/Delete');

const changeFilter = createAction('contact/Filter');

export const contactsActions = { addContact, deleteContact, changeFilter };
