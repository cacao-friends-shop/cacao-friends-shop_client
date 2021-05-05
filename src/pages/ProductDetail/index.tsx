import Template, { productDetailProps } from './template';

const ProductDetail = ({ ...restProps }: productDetailProps) => {
  return <Template {...restProps} />;
};

export default ProductDetail;
