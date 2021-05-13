import { css } from '@emotion/react';
import { colors } from 'theme';
import PostListTitle from 'components/molecules/PostListTitle';
import IconLink from 'components/molecules/IconLink';
import Pagination from 'components/molecules/Pagination';
import ControlBar from 'components/organisms/ControlBar';
import PostList from 'components/organisms/PostList';

type Contents = {
  id: string;
  title: string;
  likeCount: number;
  writer: string;
  date: string;
  commentsCount: number;
};

type TemplateProps = {
  contents: Array<Contents>;
};

const Template = ({ contents }: TemplateProps) => {
  return (
    <div css={container}>
      <div css={headerStyle}>
        <PostListTitle title="글 관리" count={contents.length} />
        <IconLink
          type="rightIcon"
          to="/admin/newpost"
          iconName="pencil"
          iconSize={12}
          bgColor={colors.white}
          css={linkStyle}
        >
          글쓰기
        </IconLink>
      </div>
      <div>
        <ControlBar />
        <PostList contents={contents} />
      </div>
      <Pagination contentsLength={24} />
    </div>
  );
};

const container = css`
  padding: 3rem 1.75rem 0;
  max-width: 64rem;
  margin: 0 auto;
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const linkStyle = css`
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid ${colors.gray};
  border-radius: 3px;

  svg {
    fill: ${colors.gray};
  }

  &:hover {
    box-shadow: 0 0 5px 1px ${colors.adminGray};
  }
`;

export default Template;
