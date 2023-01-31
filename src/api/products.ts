import { api } from './api';

export const requestProduct = (token: string) => {
  return api.post('/Product/GetAll', token);
};
