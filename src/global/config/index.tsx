import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://temperatura-brasil-default-rtdb.firebaseio.com',
});
