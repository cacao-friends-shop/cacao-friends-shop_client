import { IconType } from 'react-icons/lib';
import { BiSearch, BiHomeAlt, BiMenu } from 'react-icons/bi';
import { VscTrash, VscClose } from 'react-icons/vsc';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';

import { AiOutlineLock } from 'react-icons/ai';

import { RiKakaoTalkFill } from 'react-icons/ri';

import {
  IoChatbubblesOutline,
  IoBasketOutline,
  IoArrowUpCircleSharp,
} from 'react-icons/io5';

import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from 'react-icons/io';

type Icon = {
  [key: string]: IconType;
};

const icon: Icon = {
  search: BiSearch,
  trash: VscTrash,
  close: VscClose,
  fillHeart: AiFillHeart,
  outlineHeart: AiOutlineHeart,
  bubble: IoChatbubblesOutline,
  home: BiHomeAlt,
  basket: IoBasketOutline,
  pencil: BsPencil,
  menu: BiMenu,
  arrowLeft: IoIosArrowBack,
  arrowRight: IoIosArrowForward,
  arrowUp: IoIosArrowUp,
  arrowDown: IoIosArrowDown,
  circleArrowUp: IoArrowUpCircleSharp,

  lock: AiOutlineLock,

  kakaoTalk: RiKakaoTalkFill,

};

export default icon;
