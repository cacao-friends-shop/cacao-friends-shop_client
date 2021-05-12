import { css } from '@emotion/react';
import PostListItem from 'components/molecules/PostListItem';
import { colors } from 'theme';

type Contents = {
  id: string;
  title: string;
  likeCount: number;
  writer: string;
  date: string;
  commentsCount: number;
};

type PostListProps = {
  contents: Array<Contents>;
} & React.HTMLAttributes<HTMLUListElement>;

const PostList = ({ contents, ...restProps }: PostListProps) => {
  return (
    <ul css={postListStyle} {...restProps}>
      {contents.map(content => (
        <PostListItem
          key={content.id}
          title={content.title}
          likeCount={content.likeCount}
          writer={content.writer}
          date={content.date}
          commentsCount={content.commentsCount}
        />
      ))}
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
