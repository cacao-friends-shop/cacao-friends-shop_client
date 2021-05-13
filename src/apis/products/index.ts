import axios from 'axios';
import { Product, Products } from 'modules/Product/types';

export const getProducts = async () => {
  const { data: products } = await axios.get<Products>(`/products`);
  return products;
};

export const getProductById = async (id: number) => {
  const { data: product } = await axios.get<Product>(`/products/${id}`);

  return product;
};
