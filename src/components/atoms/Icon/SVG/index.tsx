import { IconType } from 'react-icons/lib';
import { BiSearch, BiHomeAlt, BiMenu } from 'react-icons/bi';
import { VscTrash, VscClose } from 'react-icons/vsc';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsPencil, BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import { AiOutlineLock, AiOutlineCheck } from 'react-icons/ai';

import { RiKakaoTalkFill, RiShareForwardLine } from 'react-icons/ri';
import {
  IoBasketOutline,
  IoArrowUpCircleSharp,
  IoChatbubbleOutline,
  IoCheckmarkCircleSharp,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
  IoLogoGithub,
  IoIosArrowDropright,
  IoIosArrowDropleft,
} from 'react-icons/io';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { GrEdit } from 'react-icons/gr';

type Icon = {
  [key: string]: IconType;
};

const icon: Icon = {
  fontAwesomeCheckCircle: FaCheckCircle,
  fontAwesomeregCheckCircle: FaRegCheckCircle,
  starFill: BsStarFill,
  starHalf: BsStarHalf,
  star: BsStar,
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
  // mdCheckCircle: MdCheckCircle,
  arrowDropright: IoIosArrowDropright,
  arrowDropleft: IoIosArrowDropleft,
  outlineCheck: AiOutlineCheck,
  checkCircle: IoCheckmarkCircleSharp,
  unCheckCircle: IoCheckmarkCircleOutline,
  edit: GrEdit,
  github: IoLogoGithub,
};

export default icon;
