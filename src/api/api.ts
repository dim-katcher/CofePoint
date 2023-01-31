import { create } from 'apisauce';

const baseURL = 'http://ci2.dextechnology.com:8000/api';

export const api = create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
