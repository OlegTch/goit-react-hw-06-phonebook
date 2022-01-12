import { useDispatch } from 'react-redux';
import { contactsActions } from '../../redux/phonebook/phonebook-actions';
import styles from './ContactList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = idx => dispatch(contactsActions.deleteContact(idx));

  return (
    <li className={styles.contactsItem} id={id}>
      <p className={styles.contactsName}>{name}:</p>
      <p className={styles.contactsNumber}>{number}</p>
      <button
        className={styles.contactsButton}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
