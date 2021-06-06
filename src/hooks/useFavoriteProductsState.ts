import { Products } from 'types/Product';

const useFavoriteProductsState = (products: Products) => {
  const copy = JSON.parse(JSON.stringify(products));

  const favoriteProductsDivider = (products: Products): Products[] => {
    let answer: Products[] = [];
    let count = 0;
    let array = [3, 6];

    while (products.length > 2) {
      answer = [...answer, products.splice(0, array[count % 2])];
      count++;
    }
    return answer;
  };

  return favoriteProductsDivider(copy);
};

export default useFavoriteProductsState;
