import getPublicAsset from 'utils/getPublicAsset';
import Template from './template';
import { characterNameList } from 'staticData';

type match<T> = {
  params: T;
  isExact: boolean;
  path: string;
  url: string;
};

type MathParams = {
  character: string;
};

type CharacterProductsProps<T> = {
  match?: match<T>;
};

const CharacterProducts = ({ match }: CharacterProductsProps<MathParams>) => {
  let characterType;

  if (match) {
    const { character } = match.params;
    characterType = character;
  }

  const characterName = characterType && characterNameList[characterType];

  return (
    <Template
      title={characterName}
      imgURL={getPublicAsset(`assets/Category_${characterType}.jpg`)}
      characterType={characterType}
    />
  );
};

export default CharacterProducts;
