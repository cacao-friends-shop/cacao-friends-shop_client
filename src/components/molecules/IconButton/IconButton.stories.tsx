import IconButton from './';
import { css } from '@emotion/react';

export default {
  component: IconButton,
  title: 'molecules/IconButton',
};

// 홈 아이콘 버튼
export const homeIconButton = () => (
  <IconButton name="home" size={40} fgColor="green" />
);

// 꽉찬 하트 아이콘 버튼
export const fillHeartIconButton = () => (
  <IconButton name="fillHeart" size={40} fgColor="red" />
);

// 빈 하트 아이콘 버튼
export const outlineHeartIconButton = () => (
  <IconButton name="outlineHeart" size={40} fgColor="gray" />
);

const iconButtonTypes = [
  'search',
  'trash',
  'close',
  'fillHeart',
  'outlineHeart',
  'bubble',
  'home',
  'basket',
  'pencil',
  'menu',
  'arrowLeft',
  'arrowRight',
  'arrowUp',
  'arrowDown',
  'circleArrowUp',
  'share',
  'lock',
  'kakaoTalk',
];

// 아이콘버튼 그룹
export const listOfIconButtons = () => {
  return (
    <ul css={iconButtonListStyle}>
      {iconButtonTypes.map(icon => (
        <li key={icon}>
          <IconButton name={icon} size={20} fgColor="red" />
          {icon}
        </li>
      ))}
    </ul>
  );
};

const iconButtonListStyle = css`
  display: flex;
  flex-wrap: wrap;

  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    button {
      margin-right: 1rem;
    }
  }
`;
