import { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';
import ContactForm from './ContactForm/ContactForm ';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
// import { nanoid } from 'nanoid';
// import contactActions from '../redux/phonebook/phonebook-actions';

import dataContacts from '../data/contacts.json';
// import * as actions from '../redux/actions';

function App() {
  const [contacts, setContacts] = useState(dataContacts);
  // // const [contacts, setContacts] = useLocalStorage('contacts', dataContacts);
  // const [filter, setFilter] = useState('');

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   const checkContacts = contacts.find(
  //     contact => name.toLowerCase() === contact.name.toLowerCase(),
  //   );

  //   const checkContactsNumber = contacts.find(
  //     contact => number.toLowerCase() === contact.number.toLowerCase(),
  //   );

  //   if (checkContacts) {
  //     return onError(`${checkContacts.name}`);
  //   }

  //   if (checkContactsNumber) {
  //     return onError(`${checkContactsNumber.number}`);
  //   }

  //   setContacts([contact, ...contacts]);
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // const onError = checkContacts => {
  //   const message = `${checkContacts} is already in contacts`;
  //   alert(message);
  // };

  useEffect(() => {
    const parsedContacts = JSON.parse(window.localStorage.getItem('contacts'));

    if (parsedContacts) {
      setContacts(parsedContacts);
      if (parsedContacts.length === 0) {
        console.log('phonebook was empty, returned base contacts');
        setContacts(dataContacts);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      {/* <ContactForm onFormSubmit={addContact} /> */}
      {/* <ContactForm onFormSubmit /> */}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter
      // filterValue={filter}
      // onChangeFilter={changeFilter}
      />
      <ContactList
      // contacts={getFilteredContacts()}
      // onDeleteContact={deleteContact}
      />
    </div>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

// const mapStateToProps = state => {
//   return {
//     itemsValue: state.contacts.items,
//     filterValue: state.contacts.filter,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onContactAdd: () => dispatch(actions.contactAdd('newName')),
//     onContactDelete: () => dispatch(actions.contactDelete('DeleteContacts')),
//     onFilter: () => dispatch(actions.filter('filter')),
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onFormSubmit: text => dispatch(contactActions.addContact(text)),
// });

// export default connect(null, mapDispatchToProps)(App);

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect()(App);
export default App;
