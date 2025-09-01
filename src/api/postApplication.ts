import axios from 'axios';

export const postApplication = axios.create({
  baseURL: 'http://letsworkout.pl/',
  withCredentials: false,
});
