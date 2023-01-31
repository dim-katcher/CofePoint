import { api } from './api';
import { AuthRequest } from '@/store/types';

export const requestAuth = (userInfo: AuthRequest) => {
  const { email, password } = userInfo;
  const data = { email, password };
  return api.post('/User/Authorization', data);
};

export const requestRegistration = (userInfo: AuthRequest) => {
  const { email, password } = userInfo;
  const data = { email, password };
  return api.post('/User/Register', data);
};
