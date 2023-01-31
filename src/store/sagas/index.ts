import { authSagas } from '@/store/sagas/authSagas';
import { productSagas } from '@/store/sagas/productSagas';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([authSagas(), productSagas()]);
}
