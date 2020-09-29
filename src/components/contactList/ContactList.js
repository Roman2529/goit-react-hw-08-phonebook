import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactItem from './contactItem/ContactItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import selections from '../../redux/contacts/selectors';
import styles from './contactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <div className={styles.listPeopleBox}>
      <TransitionGroup className={styles.list}>
        {contacts.map(contact => (
          <CSSTransition key={contact.id} timeout={500} classNames={styles}>
            <ContactItem key={uuidv4()} {...contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = ({ state }) => ({
  contacts: selections.ContactFilterSelection(state),
});

export default connect(mapStateToProps)(ContactList);
