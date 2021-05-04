import Icon from './';
import { css } from '@emotion/react';

export default {
  component: Icon,
  title: 'atoms/Icon',
};

// 홈 아이콘
export const homeIcon = () => <Icon name="home" size={40} />;

// 꽉찬 하트
export const fillHeart = () => <Icon name="fillHeart" size={40} />;

// 빈 하트
export const outlineHeart = () => <Icon name="outlineHeart" size={40} />;

const iconTypes = [
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
  'checkboxUnchecked',
  'checkboxChecked',
];

// 아이콘 그룹
export const listOfIcons = () => {
  return (
    <ul css={iconListStyle}>
      {iconTypes.map(icon => (
        <li key={icon}>
          <Icon name={icon} size={20} />
          {icon}
        </li>
      ))}
    </ul>
  );
};

const iconListStyle = css`
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
