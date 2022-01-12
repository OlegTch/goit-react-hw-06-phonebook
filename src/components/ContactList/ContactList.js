import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selector';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
