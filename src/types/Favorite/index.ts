import { ProductData } from 'types/Product';
import { ActionType } from 'typesafe-actions';
import * as actions from '../../modules/favorite/actions';

export type FavoriteState = {
  loading: boolean;
  data: ProductData | null;
  error: Error | null;
};

export type FavoriteAction = ActionType<typeof actions>;
