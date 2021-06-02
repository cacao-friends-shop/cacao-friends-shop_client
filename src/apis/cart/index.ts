import axios from 'axios';
import { Carts } from 'types/Carts';

export const getCarts = async () => {
  const { data: carts } = await axios.get<Carts[]>('/carts');
  return carts;
};

export const addCarts = async (id: number, amount: number) => {
  await axios.post(`/carts/${id}`, { amount });
};
