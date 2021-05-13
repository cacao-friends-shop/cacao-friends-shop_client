import axios from 'axios';
import { Product, ProductData } from 'types/Product';

export const getProducts = async () => {
  const { data: products } = await axios.get<ProductData>(`/products`);
  return products;
};

export const getProductById = async (id: number) => {
  const { data: product } = await axios.get<Product>(`/products/${id}`);

  return product;
};

export const getNextPage = async (page: number) => {
  const { data: products } = await axios.get<ProductData>(
    `/products?page=${page}`
  );
  return products.content;
};
