import axios from 'axios';
import { Carts } from 'types/Carts';

export const getCarts = async () => {
  const { data: carts } = await axios.get<Carts[]>('/carts');
  return carts;
};

export const addCartItem = async (id: number, amount: number = 1) => {
  const res = await axios.post(`/carts/${id}`, { amount });
  return res;
};

export const deleteCartItem = async (id: number) => {
  const res = await axios.delete(`/carts/${id}`);
  return res;
};
