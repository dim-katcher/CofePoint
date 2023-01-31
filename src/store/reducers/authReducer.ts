import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { AuthRequest } from '@/store/types';

interface AuthState {
  isRequest: boolean;
  email: string;
  password: string;
  token: string;
}

const initialState: AuthState = {
  isRequest: false,
  email: '',
  password: '',
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    postRegistration: (state, { payload }: PayloadAction<AuthRequest>) => {
      state.email = payload.email;
      state.password = payload.password;
    },
    postAuth: (state, { payload }: PayloadAction<AuthRequest>) => {
      state.email = payload.email;
      state.password = payload.password;
    },
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    setRequest: (state, { payload }: PayloadAction<boolean>) => {
      state.isRequest = payload;
    },
  },
});

export default authSlice.reducer;

export const { logout, setToken, postRegistration, postAuth, setRequest } = authSlice.actions;

export const authSelector = {
  getToken: (state: RootState) => state.authReducer.token,
};
