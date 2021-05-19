const useFavoriteProductsImages = (imageList: string[]) => {
  const imgListDivider = ((imgList: string[]): Array<string[]> => {
    let answer: Array<string[]> = [];
    let count = 0;
    let array = [3, 6];

    while (imgList.length > 2) {
      answer = [...answer, imgList.splice(0, array[count % 2])];
      count++;
    }
    return answer;
  })(imageList);

  return imgListDivider;
};

export default useFavoriteProductsImages;
