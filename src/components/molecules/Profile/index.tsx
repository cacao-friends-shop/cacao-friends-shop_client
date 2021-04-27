import { css } from '@emotion/react';
import TimeStemp from 'components/TimeStemp';
import React from 'react';

type ProfileProps = {
  imagePath: string;
  alt: string;
  title: string;
  desc: string;
  time: string;
};

const Profile = ({ imagePath, alt, title, desc, time }: ProfileProps) => {
  return (
    <div css={container}>
      <div css={imageContainer}>
        <img
          css={imageStyle}
          src="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144557.png"
          alt=""
        />
      </div>
      <div>
        <h2 css={titleStyle}>프렌즈 도감</h2>
        <div css={textContainer}>
          <p>Daily Story</p>
          <TimeStemp time="1분 전" />
        </div>
      </div>
    </div>
  );
};

const container = css`
  display: flex;
  align-items: center;
`;

const imageContainer = css`
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
`;

const imageStyle = css`
  width: 100%;
`;

const titleStyle = css`
  font-weight: bold;
  font-size: 1.1rem;
`;

const textContainer = css`
  display: flex;
  align-items: center;
  margin-top: 0.2rem;

  p {
    font-size: 0.85rem;
    font-weight: bold;
    color: rgb(47, 126, 230);
    margin-right: 0.3rem;
  }
`;
export default Profile;
