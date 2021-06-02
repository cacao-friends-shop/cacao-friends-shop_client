import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Carts, CartsState } from 'types/Carts';
import { asyncState } from 'utils/reducerUtils';

export const initialState: CartsState = asyncState.initial();

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    getCarts(state: CartsState) {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    getCartsSuccess(state: CartsState, action: PayloadAction<Carts[]>) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    getCartsError(state: CartsState, action: PayloadAction<Error>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = cartsSlice;

export const { getCarts, getCartsSuccess, getCartsError } = actions;

export default reducer;
