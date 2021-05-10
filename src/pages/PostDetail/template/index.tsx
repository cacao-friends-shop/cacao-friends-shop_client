import React from 'react';
import PostCard from 'components/organisms/PostCard';
import { imgList } from 'staticData';
import CommentBox from 'components/atoms/CommentBox';
import { css } from '@emotion/react';
import PostDetailComment from 'components/organisms/PostDetailComment';
import { fontSizes } from 'theme';

const PostDetailTemplate = () => {
  return (
    <section css={container}>
      <div css={postContainer}>
        <PostCard imgList={imgList} />
        <CommentBox>
          <input type="text" placeholder="로그인 후 이용해주세요." />
        </CommentBox>
      </div>

      <div css={commentContainer}>
        <select name="" id="">
          <option value="최신순">최신순</option>
          <option value="과거순">과거순</option>
          <option value="좋아요순">좋아요순</option>
        </select>

        <PostDetailComment />
        <PostDetailComment />
        <PostDetailComment />
        <PostDetailComment />
      </div>
    </section>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;

  input {
    width: 100%;
    border: none;
    height: 3rem;
    background-color: inherit;
    outline: none;
  }
`;

const postContainer = css`
  padding: 0 1.5rem;

  padding-bottom: 3rem;
  border-bottom: 1px solid #aaa;
`;

const commentContainer = css`
  padding: 0 1.5rem;
  margin-top: 3rem;

  select {
    padding: 0.5rem 0;
    border: none;
    font-weight: bold;
    margin-bottom: 3rem;
    outline: none;
  }

  strong {
    font-size: ${fontSizes.sm_15};
  }

  & > div + div {
    margin-top: 2rem;
  }
`;

export default PostDetailTemplate;
