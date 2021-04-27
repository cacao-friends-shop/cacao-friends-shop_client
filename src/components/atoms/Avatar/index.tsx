import { css } from '@emotion/react';
import React from 'react';

type AvatarProps = {
  imagePath: string;
  alt: string;
};

const Avatar = ({ imagePath, alt }: AvatarProps) => {
  return (
    <div css={imageContainer}>
      <img css={imageStyle} src={imagePath} alt={alt} />
    </div>
  );
};

const imageContainer = css`
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
`;

const imageStyle = css`
  width: 100%;
`;

export default Avatar;
