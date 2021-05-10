import { css } from '@emotion/react';
import CommentBox from 'components/atoms/CommentBox';
import CommentInfo from 'components/molecules/CommentInfo';
import React from 'react';
import { fontSizes } from 'theme';

const PostDetailComment = () => {
  return (
    <article>
      <strong>김연구</strong>
      <CommentBox css={commentStyle}>
        등짝이 날라가는 제이지..... 구해줄 수 없......다... 엄마는 강력하다.....
        ....이런....제이지 : 옴마 잘못했어여 ㅠ
      </CommentBox>
      <CommentInfo css={commentInfoStyle} date="3시간 전" likeCount={3} />
    </article>
  );
};

const commentStyle = css`
  max-width: 25rem;
  padding: 2rem;
  font-size: ${fontSizes.xs_14};
`;

const commentInfoStyle = css`
  padding: 1rem;
`;
export default PostDetailComment;
