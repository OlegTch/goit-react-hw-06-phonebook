import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions } from '../../redux/phonebook/phonebook-actions';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selector';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
