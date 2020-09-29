import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../redux/contacts/actions';
import ContactList from '../contactList/ContactList';
import styles from './filter.module.css';

const Fillter = ({ value, onfilterChange }) => {
  return (
    <div class={styles.boxContact}>
      <form className={styles.boxFilter}>
        <label className={styles.label}>
          <input
            type="text"
            name="filter"
            placeholder="Let`s find your contact"
            value={value}
            className={styles.boxInput}
            onChange={e => {
              onfilterChange(e.target.value);
            }}
          />
        </label>
        <button type="submit" className={styles.boxSubmit}></button>
        <ContactList />
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onfilterChange: Actions.filterChange,
};

export default connect(null, mapDispatchToProps)(Fillter);
