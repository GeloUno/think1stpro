import axios from 'axios';

export const holidaysApi = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/',
  headers: {
    'X-Api-Key': import.meta.env.VITE_API_NINJAS_KEY as string,
  },
  params: { country: 'PL' },
  timeout: 10000,
});
