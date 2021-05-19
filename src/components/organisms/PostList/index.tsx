import { Skeleton } from '@chakra-ui/react';
import { css } from '@emotion/react';
import PostListItem from 'components/molecules/PostListItem';
import { PostsType } from 'modules/posts/types';
import { colors } from 'theme';

type PostListProps = {
  contents: Array<PostsType>;
  loading: boolean;
} & React.HTMLAttributes<HTMLUListElement>;

const PostList = ({ contents, loading, ...restProps }: PostListProps) => {
  return (
    <ul css={postListStyle} {...restProps}>
      {contents.map(item => {
        const {
          id,
          title,
          likeCount,
          characterType,
          createdDateTime,
          numberOfComments,
        } = item;
        return (
          <Skeleton isLoaded={!loading}>
            <PostListItem
              to={id}
              title={title}
              likeCount={likeCount}
              writer={characterType}
              date={createdDateTime}
              commentsCount={numberOfComments}
            />
          </Skeleton>
        );
      })}
    </ul>
  );
};

const postListStyle = css`
  max-height: 710px;
  border: 1px solid ${colors.adminBorderGray};

  div:last-child li {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export default PostList;
