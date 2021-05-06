import React from 'react';
import { css } from '@emotion/react';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import { colors, fontSizes } from 'theme';
import Rating from 'components/molecules/Rating';
import ProductDetailComment from '../ProductDetailComment';
import { v4 as uuid } from 'uuid';
import Pagination from 'components/molecules/Pagination';

type productDetailReviewProps = {
  numOfReviews: number;
  rating: number;
};

const ProductDetailComments = [
  {
    id: uuid(),
    username: '박승민',
    rating: 4.8,
    date: '2020.05.08',
    content: '이쁨,비쌈,인형 죠르디 붙어있음,꽃 다 빠짐 끝!',
    numOfLikes: 20,
  },
  {
    id: uuid(),
    username: '이재훈',
    rating: 4.2,
    date: '2020.05.05',
    content: '이쁨,비쌈,인형 죠르디 붙어있음,꽃 다 빠짐 끝!',
    numOfLikes: 17,
  },
  {
    id: uuid(),
    username: '박민우',
    rating: 3.5,
    date: '2020.05.06',
    content: '이쁨,비쌈,인형 죠르디 붙어있음,꽃 다 빠짐 끝!',
    numOfLikes: 2,
  },
];

const ProductDetailReview = ({
  numOfReviews,
  rating,
}: productDetailReviewProps) => {
  return (
    <section css={container}>
      <div css={reviewContentContainer}>
        <Title headingNumber={2}>리뷰 {numOfReviews}개</Title>
        <Rating numOfReviews={rating}>
          <p>
            {rating} <span>| 5.0</span>
          </p>
        </Rating>
      </div>
      <Button bgColor="rgb(60, 64, 75)" color="#ffffff">
        <Icon name="pencil" size={32} />
        리뷰를 남겨주세요
      </Button>
      <div css={recentAndPopularButtonContainer}>
        <Button bgColor="rgb(141, 146, 161)" color="#ffffff">
          좋아요순
        </Button>
        <Button bgColor="#ffffff" color="rgb(141, 146, 161)">
          최신순
        </Button>
      </div>
      <div css={commentContainer}>
        {ProductDetailComments.map(
          ({ id, username, rating, date, content, numOfLikes }) => (
            <ProductDetailComment
              key={id}
              username={username}
              rating={rating}
              date={date}
              comment={content}
              numOfLikes={numOfLikes}
            />
          )
        )}
        <Pagination contentsLength={ProductDetailComments.length}></Pagination>
      </div>
    </section>
  );
};

const container = css`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
  padding: 3.5rem 2rem 6.7rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    font-size: ${fontSizes.base_16};
    border-radius: 4px;
    font-weight: bold;

    svg {
      margin-right: 2rem;
    }
  }
`;

const reviewContentContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: ${fontSizes.xxxl_24};
  }
  p {
    margin-left: 1rem;
    font-size: ${fontSizes.base_16};
    height: 1.6rem;
    line-height: 1.6rem;
    color: ${colors.black};
    span {
      color: rgb(154, 154, 158);
    }
  }
`;

const recentAndPopularButtonContainer = css`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  button {
    max-width: 6.5rem;
    font-size: ${fontSizes.xxs_13};
    width: 100%;
    height: 3rem;
    border: 1px solid rgb(141, 146, 161);
    border-radius: 8vw;
  }
  button + button {
    margin-left: 1rem;
  }
`;

const commentContainer = css`
  button {
    justify-content: flex-start;
  }
`;
export default ProductDetailReview;
