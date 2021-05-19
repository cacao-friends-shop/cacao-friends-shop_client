import { FavoriteAction, FavoriteState } from 'types/Favorite';
import { createReducer } from 'typesafe-actions';
import { asyncState } from 'utils/reducerUtils';
import {
  FAVORITE_PRODUCTS,
  FAVORITE_PRODUCTS_ERROR,
  FAVORITE_PRODUCTS_SUCCESS,
} from './actions';

const initialState: FavoriteState = asyncState.initial();

const favoriteReducer = createReducer<FavoriteState, FavoriteAction>(
  initialState,
  {
    [FAVORITE_PRODUCTS]: () => asyncState.load(),
    [FAVORITE_PRODUCTS_SUCCESS]: (_, action) =>
      asyncState.success(action.payload),
    [FAVORITE_PRODUCTS_ERROR]: (_, action) => asyncState.error(action.payload),
  }
);

export default favoriteReducer;
