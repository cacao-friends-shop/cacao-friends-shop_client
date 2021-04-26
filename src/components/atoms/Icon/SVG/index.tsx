import { IconType } from 'react-icons/lib';
import { BiSearch } from 'react-icons/bi';

type Icon = {
  [key: string]: IconType;
};

const icon: Icon = {
  search: BiSearch,
};

export default icon;
