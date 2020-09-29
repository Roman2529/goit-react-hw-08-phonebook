import React from 'react';
import styles from './form.module.css';

const ContactForm = ({ name, number, handleChange }) => {
  return (
    <div className={styles.boxContact}>
      <form className={styles.formContact}>
        <h2>Phonebook</h2>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            className={styles.nameInput}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="text"
            name="number"
            onChange={handleChange}
            value={number}
            className={styles.nameInput}
          />
        </label>
        <button type="submit" className={styles.submitInput}>
          Add
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
