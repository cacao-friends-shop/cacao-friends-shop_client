import React from 'react';
import { css } from '@emotion/react';
import Avatar from 'components/atoms/Avatar';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import IconButton from 'components/molecules/IconButton';
import Rating from 'components/molecules/Rating';
import { colors, fontSizes } from 'theme';

export type productDetailCommentProps = {
  username: string;
  numOfReviews: number;
  date: string;
  comment: string;
  numOfLikes: number;
};

const replaceMiddleTextWithAst = (character: string) => {
  return character.substr(0, 1) + '*' + character.substr(1 + 1);
};

const ProductDetailComment = ({
  username,
  numOfReviews,
  date,
  comment,
  numOfLikes,
}: productDetailCommentProps) => {
  return (
    <section css={container}>
      <strong css={usernameStyle}>{replaceMiddleTextWithAst(username)}</strong>
      <div css={ratingAndDateStyle}>
        <Rating numOfReviews={numOfReviews}></Rating>
        <time>{date}</time>
      </div>
      <p css={commentStyle}>{comment}</p>
      <Button css={likeButtonStyle}>
        <Avatar
          imagePath="https://t1.kakaocdn.net/friends/new_store/2.0/common/ryan_gray.png"
          alt="흑색 라이언"
        />
        좋아요 {numOfLikes}명
      </Button>
    </section>
  );
};

const container = css`
  padding: 3rem 0;
  border-top: 0.1rem solid rgb(233, 233, 233);
`;

const usernameStyle = css`
  font-size: 1.7rem;
  font-weight: bold;
`;

const ratingAndDateStyle = css`
  display: flex;
  margin: 0.6rem 0 1.2rem;
  time {
    margin-left: 1rem;
  }
`;

const commentStyle = css`
  font-size: ${fontSizes.sm_15};
  margin-bottom: 1.5rem;
`;

const likeButtonStyle = css`
  width: 100%;
  max-width: 13.5rem;
  display: flex;
  align-items: center;
  padding: 0;

  & > div {
    display: inline-block;
  }

  background: ${colors.white};

  &:hover {
    background: rgb(247, 247, 247);
  }
`;
export default ProductDetailComment;
