import { IProduct } from '@/store/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface ProductState {
  products: IProduct[];
  isRequest: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  isRequest: false,
  error: '',
};

export const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProducts: () => initialState,
    postProduct: (state, { payload }: PayloadAction<string>) => {},
    setProduct: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.products = payload;
    },
    setRequest: (state, { payload }: PayloadAction<boolean>) => {
      state.isRequest = payload;
    },
  },
});

export default productReducer.reducer;

export const { clearProducts, postProduct, setProduct, setRequest } = productReducer.actions;

export const productSelector = {
  getProductsLoading: (state: RootState) => state.productReducer.isRequest,
  getProducts: (state: RootState) => state.productReducer.products,
};
