import actions from './authActions';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addNewUser = user => async dispatch => {
  dispatch(actions.registerRequest());
  try {
    const result = await axios.post('/users/signup', user);
    token.set(result.data.token);
    dispatch(actions.registerSuccess(result.data));
  } catch (error) {
    dispatch(actions.registerError(error));
  }
};

const loginUser = user => async dispatch => {
  dispatch(actions.loginRequest());
  try {
    const result = await axios.post('/users/login', user);
    token.set(result.data.token);
    dispatch(actions.loginSuccess(result.data));
  } catch (error) {
    dispatch(actions.loginError(error));
  }
};

const logOut = () => async dispatch => {
  dispatch(actions.logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(actions.logoutSuccess());
  } catch (error) {
    dispatch(actions.logoutError(error));
  }
};

const currentUser = () => async (dispatch, getState) => {
  dispatch(actions.getCurrentUserRequest());

  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  try {
    const result = await axios.get('/users/current');
    dispatch(actions.getCurrentUserSuccess(result));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error));
  }
};

export default { addNewUser, loginUser, logOut, currentUser };
