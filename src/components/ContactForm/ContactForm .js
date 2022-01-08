import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/phonebook-actions';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';

function ContactForm({ onFormSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onFormSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId} className={styles.label}>
        Name
      </label>
      <input
        className={styles.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        id={nameInputId}
        value={name}
      />
      <label htmlFor={numberInputId} className={styles.label}>
        Number
      </label>
      <input
        className={styles.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        id={numberInputId}
        value={number}
      />

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

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

const mapDispatchToProps = dispatch => ({
  onFormSubmit: value =>
    dispatch(contactsActions.addContact(value.name, value.number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
// export default ContactForm;
