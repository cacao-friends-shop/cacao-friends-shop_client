import React, { useEffect } from 'react';
import PostCard from 'components/organisms/PostCard';
import CommentBox from 'components/atoms/CommentBox';
import { css } from '@emotion/react';
import PostDetailComment from 'components/organisms/PostDetailComment';
import { fontSizes } from 'theme';
import { useParams } from 'react-router-dom';
import { getPost } from 'modules/posts/postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import Error from 'pages/Error';
import { Skeleton, Spinner } from '@chakra-ui/react';

type ParamType = {
  id: string;
};

const PostDetailTemplate = () => {
  const { id } = useParams<ParamType>();
  const postId = parseInt(id, 10);
  const { loading, data, error } = useSelector(
    (state: RootState) =>
      state.posts.post[postId] || { loading: false, data: null, error: null }
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  if (!data)
    return (
      <div css={spinnerStyle}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  if (error) return <Error />;

  return (
    <section css={container}>
      <div css={postContainer}>
        <Skeleton isLoaded={!loading}>
          <PostCard
            title={data.title}
            content={data.content}
            characterType={data.characterType}
            imgList={data.imageUrls}
            createdDateTime={data.createdDateTime}
            likeCount={data.likeCount}
          />
        </Skeleton>
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

const spinnerStyle = css`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
  padding: 30rem 0;

  div {
    padding: 5rem;
  }
`;

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
