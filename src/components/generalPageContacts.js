import React, { Component } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { Alert } from './alert/Alert';
import Fillter from './filter/Filter';
import ContactForm from './contactForm/ContactForm';
import Actions from '../redux/contacts/actions';
import contactOperation from '../redux/contacts/operations';
import selections from '../redux/contacts/selectors';

const initialState = {
  name: '',
  number: '',
};

class FormContacts extends Component {
  state = {
    ...initialState,
  };

  componentDidMount() {
    this.props.onGetContactOperation();
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const errorContacts = this.props.contacts;

    if (errorContacts) {
      const error = errorContacts.map(contact => contact);
      error.find(
        errorItem =>
          errorItem.name === this.state.name &&
          errorItem.number === this.state.number,
      )
        ? this.alertShow()
        : this.props.onAddContacts({ name, number });
    }
    this.setState({ ...initialState });
  };

  alertShow = () => {
    this.props.onAlertError();
    setTimeout(() => this.props.onAlertError(), 5000);
  };

  render() {
    const { name, number } = this.state;
    const { alert } = this.props;
    return (
      <div>
        {alert && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="alert"
            unmountOnExit
          >
            <Alert />
          </CSSTransition>
        )}
        <Form onSubmit={this.handleSubmit}>
          <ContactForm
            handleChange={this.handleChange}
            name={name}
            number={number}
          />
        </Form>
        <Fillter />
      </div>
    );
  }
}

const mapStateToProps = ({ state }) => {
  return {
    value: selections.FilterSelection(state),
    alert: selections.AlertSelection(state),
    contacts: selections.ContactSelectionction(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContacts: (name, number) =>
      dispatch(contactOperation.addContactOperation(name, number)),
    onAlertError: () => dispatch(Actions.alertError()),
    onGetContactOperation: () =>
      dispatch(contactOperation.getContactOperation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContacts);
