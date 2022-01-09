import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { contactsActions } from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selector';
import styles from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event =>
    dispatch(contactsActions.changeFilter(event.target.value));

  const filterInputId = nanoid();

  return (
    <div className={styles.FilterThumb}>
      <label htmlFor={filterInputId} className={styles.label}>
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type="text"
        name="filter"
        required
        onChange={onChangeFilter}
        id={filterInputId}
        value={filterValue}
        autoComplete="off"
      />
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;
