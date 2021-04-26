import IconButton from './';
import { css } from '@emotion/css';

export default {
  component: IconButton,
  title: 'components/IconButton',
};

export const homeIconButton = () => (
  <IconButton name="home" size={40} fgColor="green" />
);

export const fillHeartIconButton = () => (
  <IconButton name="fillHeart" size={40} fgColor="red" />
);

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
  'kakaoTalk',
];

export const listOfIconButtons = () => {
  return (
    <ul className={iconButtonListStyle}>
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
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;
