import { ActionType, createReducer } from 'typesafe-actions';
import { Product, Products } from 'types/Product';
import { call, put, takeLeading } from 'redux-saga/effects';
import { addCarts } from 'apis/cart';

const ADD_CART = 'cart/ADD_CART' as const;

export const addCart = (product: Product, id: number) => ({
  type: ADD_CART,
  payload: product,
  meta: id,
});

type CartsActions = ActionType<typeof addCart>;

type CartsState = {
  cart: Products;
};

const initialState: CartsState = {
  cart: [],
};

const cartsReducer = createReducer<CartsState, CartsActions>(initialState, {
  [ADD_CART]: (state, action) => ({
    ...state,
    cart: [...state.cart, action.payload],
  }),
});

function* addCartSaga(action: ReturnType<typeof addCart>) {
  yield call(addCarts, action.meta);
  yield put(addCart(action.payload, action.meta));
}

export function* cartsSaga() {
  yield takeLeading(ADD_CART, addCartSaga);
}

export default cartsReducer;
