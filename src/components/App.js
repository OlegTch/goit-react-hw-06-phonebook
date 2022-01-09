import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';
import ContactForm from './ContactForm/ContactForm ';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

function App() {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;
