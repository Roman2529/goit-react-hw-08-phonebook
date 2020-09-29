import actions from './actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const addContactOperation = description => dispatch => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', { ...description })
    .then(responce => {
      dispatch(
        actions.addContactSuccess({ ...description, id: responce.data.name }),
      );
    })
    .catch(error => dispatch(actions.addContactError(error)));
};

const removeContactOperation = id => dispatch => {
  dispatch(actions.removeContactRequest());
  axios
    .delete(`contacts/${id}`)
    .then(() => {
      dispatch(actions.removeContactSuccess(id));
    })
    .catch(error => {
      dispatch(actions.removeContactError(error));
    });
};

const getContactOperation = () => async dispatch => {
  dispatch(actions.getContactsRequest());
  try {
    const result = await axios.get('/contacts');
    const keys = Object.keys(result.data);
    const data = keys.reduce((acc, key) => {
      acc.push({ id: key, ...result.data[key] });
      return acc;
    }, []);
    dispatch(actions.getContactsSuccess(data));
  } catch (error) {
    dispatch(actions.getContactsError('Error'));
  }
};

export default {
  addContactOperation,
  getContactOperation,
  removeContactOperation,
};
