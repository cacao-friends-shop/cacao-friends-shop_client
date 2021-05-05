import { css } from '@emotion/react';
import TimeStemp from 'components/atoms/TimeStemp';
import React from 'react';
import { Link } from 'react-router-dom';
import { fontSizes } from 'theme';
import IconButton from '../IconButton';

type ActivityListItemProps = {
  /** 포스트 제목 */
  title: string;
  /** 활동 시간 */
  time: string;
  children?: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;

const ActivityListItem = ({
  title,
  time,
  children,
  ...restProps
}: ActivityListItemProps) => {
  return (
    <li css={container} {...restProps}>
      <Link to="/" css={imgContainer}>
        <img
          src="https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210422104953.jpg"
          alt="img"
        />
      </Link>
      <div css={textContainer}>
        <h3>{title}</h3>
        <span>게시물을 좋아했습니다</span>
        <TimeStemp time={time} />
      </div>
      <IconButton css={buttonStyle} name="close" size={20} />
    </li>
  );
};

const container = css`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid rgb(242, 242, 242);
  padding: 2.5rem;
  position: relative;
`;

const imgContainer = css`
  display: block;
  width: 10rem;
  box-sizing: border-box;
  position: relative;
  margin-right: 2rem;
  flex-shrink: 0;

  img {
    width: 100%;
  }
`;

const textContainer = css`
  flex: 1;

  h3 {
    max-width: 21rem;
    font-weight: 700;
    line-height: 1.5;
    font-size: ${fontSizes.sm_15};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    display: block;
    font-size: ${fontSizes.xxs_13};
  }

  span + span {
    margin-top: 1rem;
  }
`;

const buttonStyle = css`
  color: #777;
`;

export default ActivityListItem;
