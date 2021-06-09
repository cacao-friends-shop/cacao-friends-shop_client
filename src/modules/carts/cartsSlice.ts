import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Carts, CartsState } from 'types/Carts';
import { asyncState } from 'utils/reducerUtils';

export const initialState: CartsState = asyncState.initial();

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    getCarts(state: CartsState) {
      return { ...state, ...asyncState.load() };
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
    addCarts(
      state: CartsState,
      action: PayloadAction<{ id: number; amount?: number }>
    ) {
      state.loading = true;
    },
    addCartsSuccess(state: CartsState) {
      state.loading = false;
    },
    addCartsError(state: CartsState, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCarts(state: CartsState, action: PayloadAction<number>) {
      state.loading = true;
    },
    deleteCartsSuccess(state: CartsState) {
      state.loading = false;
    },
    deleteCartsError(state: CartsState, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = cartsSlice;

export const {
  getCarts,
  getCartsSuccess,
  getCartsError,
  addCarts,
  addCartsSuccess,
  addCartsError,
  deleteCarts,
  deleteCartsError,
  deleteCartsSuccess,
} = actions;

export default reducer;
