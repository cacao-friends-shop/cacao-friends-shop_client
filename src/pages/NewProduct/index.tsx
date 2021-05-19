import { productsAsync } from 'modules/Product/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'saga';
import Template from './template';

const NewProduct = () => {
  return <Template />;
};

export default NewProduct;
