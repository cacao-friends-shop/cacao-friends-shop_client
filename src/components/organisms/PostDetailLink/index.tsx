import { css } from '@emotion/react';
import Comment from 'components/atoms/Comment';
import CommentBox from 'components/atoms/CommentBox';
import React from 'react';
import { Link } from 'react-router-dom';

const PostDetailLink = () => {
  return (
    <Link to="/" css={commentCountStyle}>
      댓글 543개
      <Comment name="김지원" comment="나 좀 알려줘~~~" />
      <CommentBox>
        <textarea name="comment" placeholder="댓글을 입력해주세요." />
      </CommentBox>
    </Link>
  );
};

const commentCountStyle = css`
  display: block;
  color: #aaa;
  margin: 1rem 0;
  font-size: 1.2rem;
  p {
    margin-top: 1rem;
  }
`;

export default PostDetailLink;
