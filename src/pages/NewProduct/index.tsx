import { productsAsync } from 'modules/Product/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'saga';
import Template from './template';

const NewProduct = () => {
  const { data: products } = useSelector(
    (state: RootState) => state.product.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsAsync.request());
  }, [dispatch]);

  if (!products) return null;
  return <Template products={products.content} />;
};

export default NewProduct;
