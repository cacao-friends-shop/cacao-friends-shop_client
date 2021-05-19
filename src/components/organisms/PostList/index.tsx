import { css } from '@emotion/react';
import PostListItem from 'components/molecules/PostListItem';
import { PostsType } from 'modules/posts/types';
import { colors } from 'theme';

type PostListProps = {
  contents: Array<PostsType>;
} & React.HTMLAttributes<HTMLUListElement>;

const PostList = ({ contents, ...restProps }: PostListProps) => {
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
          <PostListItem
            key={id}
            to={id}
            title={title}
            likeCount={likeCount}
            writer={characterType}
            date={createdDateTime}
            commentsCount={numberOfComments}
          />
        );
      })}
    </ul>
  );
};

const postListStyle = css`
  max-height: 710px;
  border: 1px solid ${colors.adminBorderGray};

  li:last-child {
    border-bottom: none;
  }
`;

export default PostList;
