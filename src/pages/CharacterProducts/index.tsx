import Template from './template';

type CharacterProductsProps = {
  title: string;
  imgURL: string;
};

const CharacterProducts = ({ title, imgURL }: CharacterProductsProps) => {
  return <Template title={title} imgURL={imgURL} />;
};

export default CharacterProducts;
