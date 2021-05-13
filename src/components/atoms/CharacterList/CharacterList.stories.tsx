import { useState } from 'react';
import CharacterList from './index';

export default {
  component: CharacterList,
  title: 'atoms/CharacterList',
};

export const CharacterListBlock = () => {
  const [isShow, setIsShow] = useState(false);
  return <CharacterList setIsShow={setIsShow} />;
};
