import { css } from '@emotion/react';
import React from 'react';

type AvatarProps = {
  /** 이미지 경로 */
  imagePath: string;
  /** 이미지 설명 */
  alt: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Avatar = ({ imagePath, alt, ...restProps }: AvatarProps) => {
  return (
    <div css={imageContainer} {...restProps}>
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
