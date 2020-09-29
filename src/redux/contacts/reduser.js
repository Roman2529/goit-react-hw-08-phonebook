import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import Actions from './actions';

const onSet = (state, action) => [...action.payload];
const onAddTask = (state, action) => [...state, action.payload];
const onRemove = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const contacts = createReducer([], {
  [Actions.getContactsSuccess]: onSet,
  [Actions.addContactSuccess]: onAddTask,
  [Actions.removeContactSuccess]: onRemove,
});

const filter = createReducer('', {
  [Actions.filterChange]: (state, action) => action.payload.filter,
});

const alert = (state = false, { type, payload }) => {
  switch (type) {
    case Actions.alertError.type:
      return (state = !state);
    default:
      return state;
  }
};

export default combineReducers({ contacts, filter, alert });
