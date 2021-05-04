import { IconType } from 'react-icons/lib';
import { BiSearch, BiHomeAlt, BiMenu } from 'react-icons/bi';
import { VscTrash, VscClose } from 'react-icons/vsc';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';

import { AiOutlineLock } from 'react-icons/ai';

import { RiKakaoTalkFill, RiShareForwardLine } from 'react-icons/ri';

import {
  IoBasketOutline,
  IoArrowUpCircleSharp,
  IoChatbubbleOutline,
} from 'react-icons/io5';
import { MdCheckCircle } from 'react-icons/md';
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDropright,
  IoIosArrowDropleft,
} from 'react-icons/io';

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

type Icon = {
  [key: string]: IconType;
};

const icon: Icon = {
  search: BiSearch,
  trash: VscTrash,
  close: VscClose,
  fillHeart: AiFillHeart,
  outlineHeart: AiOutlineHeart,
  bubble: IoChatbubbleOutline,
  home: BiHomeAlt,
  basket: IoBasketOutline,
  pencil: BsPencil,
  menu: BiMenu,
  arrowLeft: IoIosArrowBack,
  arrowRight: IoIosArrowForward,
  arrowUp: IoIosArrowUp,
  arrowDown: IoIosArrowDown,
  circleArrowUp: IoArrowUpCircleSharp,
  share: RiShareForwardLine,
  lock: AiOutlineLock,
  kakaoTalk: RiKakaoTalkFill,
  checkboxUnchecked: ImCheckboxUnchecked,
  checkboxChecked: ImCheckboxChecked,
  mdCheckCircle: MdCheckCircle,
  arrowDropright: IoIosArrowDropright,
  arrowDropleft: IoIosArrowDropleft,
};

export default icon;
