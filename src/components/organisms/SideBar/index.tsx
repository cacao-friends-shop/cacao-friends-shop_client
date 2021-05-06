import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors, fontSizes } from 'theme';
import { HTMLMotionProps, motion } from 'framer-motion';
import IconLink from 'components/molecules/IconLink';
import { IconList } from 'staticData';

type SideBarProps = {
  children: React.ReactNode;
} & HTMLMotionProps<'div'>;

// SideBar
const SideBar = ({ children, ...restProps }: SideBarProps) => {
  return (
    <motion.div css={sidebarStyle} {...restProps}>
      {children}
    </motion.div>
  );
};

const sidebarStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.white};
  width: 40rem;
  height: 100vh;
  padding: 3.5rem 0;
  z-index: 1001;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 40rem;
  }
`;

// ---------------------------------------------------------------------------
// SideBar.Header
type SideBarHeaderProps = {
  /** 로그인 상태 확인 login 또는 nonLogin */
  type: string;
  /** 로그인 시 사용자 닉네임 */
  nickName?: string;
};

const SideBarHeader = ({ type, nickName }: SideBarHeaderProps) => {
  const login = (
    <>
      <span className="text">{nickName}</span>
      님! 반가워요!
    </>
  );
  const nonLogin = (
    <>
      <span className="text">로그인</span>이 필요해요!
    </>
  );

  return (
    <div css={headerStyle}>
      <Link to="/" css={loginStyle}>
        {type === 'login' ? login : nonLogin}
      </Link>
    </div>
  );
};

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.gray};
  padding: 0 2.4rem 2.5rem;
`;

const loginStyle = css`
  font-weight: bold;
  font-size: 1.8rem;
  .text {
    text-decoration: underline;
  }
`;

// ---------------------------------------------------------------------------
// SideBar.Body
type SideBarBodyProps = {
  /** 장바구니에 넣은 상품 갯수 */
  cartCount?: number;
  /** 주문한 상품의 갯수 */
  orderCount?: number;
};

const SideBarBody = ({ cartCount, orderCount }: SideBarBodyProps) => {
  return (
    <ul css={bodyStyle}>
      <li>
        <Link to="/">
          장바구니 내역
          {cartCount && <span css={countStyle}>{cartCount}</span>}
        </Link>
      </li>
      <li>
        <Link to="/">
          주문·배송 내역
          {orderCount && <span css={countStyle}>{orderCount}</span>}
        </Link>
      </li>
      <li className="style_category">
        <span tabIndex={0}>캐릭터</span>
        <ul css={characterStyle}>
          {IconList.map(icon => (
            <li key={icon.id}>
              <Link to={icon.link}>
                <img css={avatarStyle} src={icon.imagePath} alt={icon.name} />
                <p>{icon.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

const bodyStyle = css`
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

const countStyle = css`
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.3rem;
  background-color: ${colors.pink};
  border-radius: 50%;
  color: ${colors.white};
  width: 2rem;
  height: 2rem;
  text-align: center;
  font-size: ${fontSizes.xxs_13};
`;

const characterStyle = css`
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

const avatarStyle = css`
  width: 5rem;
`;

// ---------------------------------------------------------------------------
// SideBar.Footer
type SideBarFooterProps = {
  /** 로그인 상태 확인 login 또는 nonLogin */
  type: string;
};

const SideBarFooter = ({ type }: SideBarFooterProps) => {
  return (
    <IconLink
      type="leftIcon"
      to="/"
      iconName="lock"
      iconSize={20}
      bgColor="transparent"
      css={footerStyle}
    >
      {type === 'login' ? '로그아웃' : '로그인'}
    </IconLink>
  );
};

const footerStyle = css`
  display: flex;
  padding: 2rem 0;
  color: ${colors.gray};

  a {
    display: block;
  }

  span {
    font-weight: bold;
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;

SideBar.Header = SideBarHeader;
SideBar.Body = SideBarBody;
SideBar.Footer = SideBarFooter;

export default SideBar;
