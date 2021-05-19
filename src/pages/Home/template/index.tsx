import React, { useEffect } from 'react';
import PostCard from 'components/organisms/PostCard';
import TabComp from 'components/molecules/TabComp';
import PostDetailLink from 'components/organisms/PostDetailLink';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'saga';
import { getPosts } from 'modules/posts/postsSlice';
import { Skeleton } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Error from 'pages/Error';

const Template = () => {
  const { loading, data, error } = useSelector(
    (state: RootState) => state.posts.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (!data) return null;
  if (error) return <Error />;

  return (
    <div css={container}>
      <TabComp />
      {data.map(post => (
        <Skeleton isLoaded={!loading} key={post.id}>
          <PostCard
            title={post.title}
            content={post.content}
            characterType={post.characterType}
            imgList={post.imageUrls}
            createdDateTime={post.createdDateTime}
            likeCount={post.likeCount}
          >
            <PostDetailLink />
          </PostCard>
        </Skeleton>
      ))}
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
`;

export default Template;
