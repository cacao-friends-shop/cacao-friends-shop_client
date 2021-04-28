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
  /** 설명 */
  desc?: string;
};

const Profile = ({ imagePath, alt, title, time, desc }: ProfileProps) => {
  return (
    <div css={container}>
      <Avatar imagePath={imagePath} alt={alt} />
      <div>
        <h2 css={titleStyle}>{title}</h2>
        <div css={textContainer}>
          {desc && <p>{desc}</p>}
          <TimeStemp time={time} />
        </div>
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
  display: flex;
  align-items: center;
  margin-top: 0.4rem;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(47, 126, 230);
    margin-right: 0.5rem;
  }
`;
export default Profile;
