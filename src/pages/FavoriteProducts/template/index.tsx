import ProductImageCardList from 'components/organisms/ProductImageCardList/ProductImageCardList';
import ProductImageCardListType2 from 'components/organisms/ProductImageCardList/ProductImageCardListType2';
import ProductImageCardListType3 from 'components/organisms/ProductImageCardList/ProductImageCardListType3';

// const ProductImageCardListGroup = (
//   imgs: string[],
//   products: Products,
//   i: number
// ) => [
//   <ProductImageCardList key={products[i].id} imgList={imgs} />,
//   <ProductImageCardListType3 key={products[i].id} imgList={imgs} />,
//   <ProductImageCardListType2 key={products[i].id} imgList={imgs} />,
//   <ProductImageCardListType3 key={products[i].id} imgList={imgs} />,
// ];

const FavoriteProductsTemplate = () => {
  // const { favorite } = useSelector(
  //   (state: RootState) => state.product.products
  // );

  // const imgList = useFavoriteProductsImages(
  //   favorite?.data
  //     ? favorite.data.content.map(product => product.thumbnailImageUrl)
  //     : []
  // );
  // const pageRef = useRef(1);
  //const dispatch = useDispatch();
  // const onScroll = () => {
  //   if (!data) return;
  //   const {
  //     scrollHeight,
  //     scrollTop,
  //     clientHeight,
  //   } = document.scrollingElement as Element;
  //   if (scrollTop + clientHeight >= scrollHeight * 0.9) {
  //     dispatch(
  //       loadMoreProductAsync.request(
  //         pageRef.current <= data.totalPages
  //           ? pageRef.current++
  //           : pageRef.current
  //       )
  //     );
  //   }
  // };
  // useEffect(() => {
  //   dispatch(loadMoreProductAsync.request(0));
  // }, [dispatch]);
  // useEffect(() => {
  //   document.addEventListener('scroll', onScroll);
  //   return () => {
  //     document.removeEventListener('scroll', onScroll);
  //   };
  // });
  // if (!favorite?.data) return null;
  return <div></div>;
  // return (
  //   <>
  //     <TabComp />
  //     <div css={{ maxWidth: '64rem', margin: '0 auto' }}>
  //       {imgList.map(
  //         (imgs: string[], i: number) =>
  //           ProductImageCardListGroup(
  //             imgs,
  //             ((favorite?.data as unknown) as ProductData).content,
  //             i
  //           )[i % 4]
  //       )}
  //     </div>
  //   </div>
  // );
};

export default FavoriteProductsTemplate;
