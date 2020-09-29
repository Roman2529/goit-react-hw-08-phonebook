import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import styles from '../loginForm/loginForm.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

class FormForReg extends Component {
  state = {
    ...initialState,
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  clickButton = () => {
    this.props.onAddNewUser({ ...this.state });
    this.setState({ ...initialState });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <div className={styles.loginBox}>
          <h2>Register</h2>
          <form>
            <div className={styles.userBox}>
              <label>User Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.userBox}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.userBox}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <a onClick={this.clickButton}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { onAddNewUser: authOperation.addNewUser })(
  FormForReg,
);
