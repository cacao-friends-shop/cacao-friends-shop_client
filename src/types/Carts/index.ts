export type CartsState = {
  loading: boolean;
  data: Carts[] | null;
  error: Error | null;
};

export type Carts = {
  id: number;
  product: CartProduct;
  amount: number;
};

export type CartProduct = {
  id: number;
  title: string;
  price: string;
  characterType: string;
  thumbnailImageUrl: string;
  soldCount: number;
  rating: number;
  detailPageImageUrls: any[];
};
