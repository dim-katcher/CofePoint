import { all, call, takeLatest, put } from 'redux-saga/effects';
import { requestRegistration, requestAuth } from '@/api/auth';
import { ApiResponse } from 'apisauce';
import { postAuth, postRegistration, setRequest, setToken } from '@/store/reducers/authReducer';
import { AuthRequest } from '@/store/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { Keys } from '@/navigation/keys';

export function* handleRegistration({ payload }: PayloadAction<AuthRequest>) {
  yield put(setRequest(true));
  try {
    const response: ApiResponse<string> = yield call(requestRegistration, payload);
    const { data, ok } = response;
    if (ok && !!data) {
      yield put(setToken(data));
      payload.navigation.replace(Keys.SignedNavigator);
    }
    yield put(setRequest(false));
  } catch (error) {
    yield put(setRequest(false));
    console.log(error);
  }
}

export function* handleAuth({ payload }: PayloadAction<AuthRequest>) {
  yield put(setRequest(true));
  try {
    const response: ApiResponse<string> = yield call(requestAuth, payload);
    const { data, ok } = response;
    if (ok && !!data) {
      yield put(setToken(data));
      payload.navigation.replace(Keys.SignedNavigator);
    }
    yield put(setRequest(false));
  } catch (error) {
    yield put(setRequest(false));
    console.log(error);
  }
}

export function* authSagas() {
  yield all([takeLatest(postAuth.type, handleAuth), takeLatest(postRegistration.type, handleRegistration)]);
}
