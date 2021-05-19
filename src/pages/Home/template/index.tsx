import React, { useEffect } from 'react';
import PostCard from 'components/organisms/PostCard';
import TabComp from 'components/molecules/TabComp';
import PostDetailLink from 'components/organisms/PostDetailLink';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'saga';
import { getPosts } from 'modules/posts/postsSlice';

const Template = () => {
  const { loading, data, error } = useSelector(
    (state: RootState) => state.posts.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중</div>;
  if (!data) return null;
  if (error) return <div>에러발생!</div>;

  return (
    <>
      <TabComp />
      {data.map(post => (
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
      ))}
    </>
  );
};

export default Template;
