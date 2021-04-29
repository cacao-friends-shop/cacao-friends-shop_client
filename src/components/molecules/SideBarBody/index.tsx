import { css } from '@emotion/react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { colors } from 'theme';
import { IconList } from 'staticData';

const SideBarBody = () => {
  return (
    <ul css={style_body}>
      <li>
        <Link to="/">장바구니 내역</Link>
      </li>
      <li>
        <Link to="/">주문·배송 내역</Link>
      </li>
      <li className="style_category">
        <span tabIndex={0}>캐릭터</span>
        <ul css={style_character}>
          {IconList.map(icon => (
            <li key={uuid()}>
              <Link to={icon.link}>
                <img css={style_avatar} src={icon.imagePath} alt={icon.name} />
                <p>{icon.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

const style_body = css`
  font-size: 1.5rem;
  padding: 0 2.4rem;
  border-bottom: 1px solid ${colors.gray};

  li {
    padding: 0.5rem 0;
  }

  li > a {
    display: block;
    padding: 2rem 0;
  }

  .style_category {
    padding: 2rem 0;
  }
`;

const style_character = css`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    text-align: center;
  }

  p {
    margin-top: 0.7rem;
    font-size: 1.2rem;
  }
`;

const style_avatar = css`
  width: 5rem;
`;

export default SideBarBody;
