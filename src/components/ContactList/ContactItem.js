import styles from './ContactList.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contactsItem} id={id}>
      <p className={styles.contactsName}>{name}:</p>
      <p className={styles.contactsNumber}>{number}</p>
      <button
        className={styles.contactsButton}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
