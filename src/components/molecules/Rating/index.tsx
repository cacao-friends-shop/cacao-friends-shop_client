import React from 'react';
import { css } from '@emotion/react';
import Icon from 'components/atoms/Icon';
type ratingProps = {
  numOfReviews: number;
  children?: React.ReactNode;
};
let isUsed = false;

const Rating = ({ numOfReviews, children }: ratingProps) => {
  return (
    <div css={container}>
      {[1, 2, 3, 4, 5].map((rating, idx) => {
        if (rating < numOfReviews) {
          return <Icon key={idx} name="bsStarFill" size={16}></Icon>;
        }
        if (numOfReviews.toString().includes('.') && !isUsed) {
          isUsed = true;
          return parseInt(numOfReviews.toString().slice(2)) > 2 ||
            parseInt(numOfReviews.toString().slice(2)) < 7 ? (
            <Icon key={idx} name="bsStarHalf" size={16}></Icon>
          ) : (
            <Icon key={idx} name="bsStar" size={16}></Icon>
          );
        }
        if (rating > numOfReviews) {
          return <Icon key={idx} name="bsStar" size={16}></Icon>;
        }
      })}
      {children}
    </div>
  );
};

const container = css`
  display: flex;

  svg + svg {
    margin-left: 1rem;
  }
  svg {
    color: red;
  }
  path {
    fill: currentColor;
  }

  svg:last-child {
    margin-right: 1rem;
  }
`;

export default Rating;
