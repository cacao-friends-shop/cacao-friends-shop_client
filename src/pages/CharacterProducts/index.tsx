import getPublicAsset from 'utils/getPublicAsset';
import Template from './template';
import { characterNameList } from 'staticData';
import { useParams } from 'react-router-dom';

type Params = {
  character: string;
};

const CharacterProducts = () => {
  const { character } = useParams<Params>();

  const characterName = characterNameList[character];

  return (
    <Template
      title={characterName}
      imgURL={getPublicAsset(`assets/Category_${character}.jpg`)}
      characterType={character}
    />
  );
};

export default CharacterProducts;
