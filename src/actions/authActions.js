/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { createBrowserHistory } from 'history';
import setAuthToken from '../utils/setAuthToken';
// Register User

import { SET_CURRENT_USER } from './types';

const history = createBrowserHistory();

export const registerUser = userData => {
  axios
    .post('http://localhost:4000/users/register', userData)
    .then(res => history.push('/login'));
};

// Login User

export const loginUser = userData => dispatch => {
  axios.post('http://localhost:4000/users/login', userData).then(res => {
    // Save to local storage
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    // set current user
    dispatch(setCurrentUser(decoded));
  });
};

// set current user

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});
