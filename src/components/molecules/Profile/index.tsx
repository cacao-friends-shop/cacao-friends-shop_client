import { css } from '@emotion/react';
import Avatar from 'components/atoms/Avatar';
import TimeStemp from 'components/atoms/TimeStemp';
import React from 'react';

type ProfileProps = {
  /** 이미지 경로 */
  imagePath: string;
  /** 이미지 설명 */
  alt: string;
  /** 이름 */
  title: string;
  /** 등록 시간 */
  time: string;
};

const Profile = ({ imagePath, alt, title, time }: ProfileProps) => {
  return (
    <div css={container}>
      <Avatar imagePath={imagePath} alt={alt} />
      <div>
        <h2 css={titleStyle}>{title}</h2>
        <TimeStemp css={textContainer} time={time} />
      </div>
    </div>
  );
};

const container = css`
  display: flex;
  align-items: center;
`;

const titleStyle = css`
  font-weight: bold;
  font-size: 1.4rem;
`;

const textContainer = css`
  margin-top: 0.4rem;
`;
export default Profile;
