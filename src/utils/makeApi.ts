export const makeProductApi = {
  page(pageNumber: number) {
    return `/products?page=${pageNumber}`;
  },

  character(pageNumber: number, characterName: string) {
    return `/products?page=${pageNumber}&characterType=${characterName}`;
  },
};
