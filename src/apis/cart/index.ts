import axios from 'axios';

export const addCarts = async (id: number) => {
  await axios.post(`/carts/${id}`, { amount: 1 });
};
