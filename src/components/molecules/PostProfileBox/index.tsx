import { css } from '@emotion/react';
import Title from 'components/atoms/Title';
import { colors, fontSizes } from 'theme';

type PostProfileBoxProps = {
  /** 프로필 이름 */
  title: string;
  /** 프로필 이미지 URL */
  imgURL: string;
  /** 프로필 소개 문구 */
  desc: React.ReactFragment;
};

const PostProfileBox = ({ title, imgURL, desc }: PostProfileBoxProps) => {
  return (
    <div css={postProfileBoxStyle}>
      <img src={imgURL} alt={title} />
      <Title headingNumber={2}>{title}</Title>
      <p>{desc}</p>
    </div>
  );
};

const postProfileBoxStyle = css`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 0;
  border-bottom: 1px solid ${colors.gray};

  img {
    width: 13rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: ${fontSizes.xxxxl_28};
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 37rem;
    margin: 0 auto;
  }
`;

export default PostProfileBox;
