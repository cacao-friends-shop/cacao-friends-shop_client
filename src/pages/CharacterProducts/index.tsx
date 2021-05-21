import getPublicAsset from 'utils/getPublicAsset';
import Template from './template';
import { characterNameList, CharacterNameLists } from 'staticData';
import { useParams } from 'react-router-dom';

type Params = {
  character: keyof CharacterNameLists;
};

const CharacterProducts = () => {
  const { character } = useParams<Params>();

  const characterName = characterNameList[character];

  return (
    <Template
      title={characterName}
      imgURL={getPublicAsset(`assets/Category_${character}.jpg`)}
    />
  );
};

export default CharacterProducts;
