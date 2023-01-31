import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ApiResponse } from 'apisauce';
import { IProduct } from '@/store/types';
import { requestProduct } from '@/api/products';
import { setProduct, setRequest, postProduct } from '@/store/reducers/productReducer';

export function* handleProduct({ payload }: PayloadAction<string>) {
  yield put(setRequest(true));
  try {
    const response: ApiResponse<IProduct[]> = yield call(requestProduct, payload);
    const { data, ok } = response;
    if (ok && !!data?.length) {
      yield put(setProduct(data));
    }
    yield put(setRequest(false));
  } catch (error) {
    yield put(setRequest(false));
    console.log(error);
  }
}

export function* productSagas() {
  yield all([takeLatest(postProduct.type, handleProduct)]);
}
