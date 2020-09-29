import React from 'react';
import { connect } from 'react-redux';
import operations from '../../../redux/contacts/operations';
import styles from './contactItem.module.css';

const ContactItem = ({ name, number, id, onRemoveContact }) => {
  return (
    <>
      <li className={styles.listItem}>
        {name}: {number}
        <button type="button" onClick={onRemoveContact} name={id}>
          Delite
        </button>
      </li>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveContact: e => {
      dispatch(operations.removeContactOperation(e.target.name));
    },
  };
};

export default connect(null, mapDispatchToProps)(ContactItem);
