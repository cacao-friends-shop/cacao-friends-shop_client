import axios from 'axios';
import { Product, ProductData } from 'types/Product';

export const getProducts = async (characterName: string) => {
  const { data: products } = await axios.get<ProductData>(
    `/products?page=0&characterType=${characterName}`
  );
  return products;
};

export const getProductById = async (id: number) => {
  const { data: product } = await axios.get<Product>(`/products/${id}`);

  return product;
};

export const getFavoriteProducts = async (page: number) => {
  const { data: products } = await axios.get<ProductData>(
    `/products?page=${page}`
  );
  return products;
};
