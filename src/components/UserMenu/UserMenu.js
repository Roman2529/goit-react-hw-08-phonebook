import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperation';
import styles from './UserMenu.module.css';

const UserNav = ({ name, onLogoutUser }) => (
  <div>
    <span>Welcome {name}</span>
    <button
      type="button"
      onClick={onLogoutUser}
      className={styles.userMenu_Button}
    >
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.gettingUserName(state),
});

export default connect(mapStateToProps, {
  onLogoutUser: authOperations.logOut,
})(UserNav);
