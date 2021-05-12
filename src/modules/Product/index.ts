import axios from 'axios';

const publicURL = 'http://localhost:8080';

export const getProducts = async () => {
  const { data: products } = await axios.get(`${publicURL}/products`);
  return products;
};

export const getProductsById = async (id: number) => {
  const { data: product } = await axios.get(`${publicURL}/products/${id}`);

  return product;
};
