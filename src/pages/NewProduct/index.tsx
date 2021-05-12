import { productAsync, productsAsync } from 'modules/Product/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'saga';
import Template from './template';

const NewProduct = ({ ...restProps }) => {
  const state = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsAsync.request());
  }, [dispatch]);

  return <Template {...restProps} />;
};

export default NewProduct;
