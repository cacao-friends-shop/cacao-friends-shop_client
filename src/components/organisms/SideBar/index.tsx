import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors } from 'theme';
import { HTMLMotionProps, motion } from 'framer-motion';
import IconLink from 'components/molecules/IconLink';
import { IconList } from 'staticData';

type SideBarProps = {
  children: React.ReactNode;
} & HTMLMotionProps<'div'>;

// SideBar
const SideBar = ({ children, ...restProps }: SideBarProps) => {
  return (
    <motion.div css={style_sideBar} {...restProps}>
      {children}
    </motion.div>
  );
};

const style_sideBar = css`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.white};
  width: 40rem;
  height: 100vh;
  padding: 3.5rem 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 40rem;
  }
`;

// ---------------------------------------------------------------------------
// SideBar.Header
const SideBarHeader = () => {
  return (
    <div css={style_header}>
      <Link to="/" css={style_login}>
        <span className="text-login">로그인</span>이 필요해요!
      </Link>
      <IconLink
        type="rightIcon"
        to="/"
        iconName="arrowRight"
        iconSize={15}
        bgColor="transparent"
        css={style_button}
      >
        비회원 주문조회
      </IconLink>
    </div>
  );
};

const style_header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.gray};
  padding: 0 2.4rem 2.5rem;
`;

const style_login = css`
  font-weight: bold;
  font-size: 1.8rem;
  .text-login {
    text-decoration: underline;
  }
`;

const style_button = css`
  font-size: 1.4rem;
  span {
    margin-right: 0.3rem;
  }
`;

// ---------------------------------------------------------------------------
// SideBar.Body
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
            <li key={icon.id}>
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

// ---------------------------------------------------------------------------
// SideBar.Footer
const SideBarFooter = () => {
  return (
    <IconLink
      type="leftIcon"
      to="/"
      iconName="lock"
      iconSize={20}
      bgColor="transparent"
      css={style_footer}
    >
      로그인
    </IconLink>
  );
};

const style_footer = css`
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
