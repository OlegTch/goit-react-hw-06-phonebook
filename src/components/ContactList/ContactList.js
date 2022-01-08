import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/phonebook-actions';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
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

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

//
// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapStateToProps = state => {
//   const { filter, items } = state.contacts;
//   const visibleContacts = getFilteredContacts(items, filter);
//   return {
//     contacts: visibleContacts,
//   };
// };
