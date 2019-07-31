import axios from 'axios';
import { PATIENT_SEARCH } from './types';

export const searchUser = searchValue => {
  axios
    .get('http://localhost:4000/users/search', searchValue)
    .then(res => console.log(res));
};
