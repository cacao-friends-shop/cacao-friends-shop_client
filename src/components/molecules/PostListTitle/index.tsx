import { css } from '@emotion/react';
import Title from 'components/atoms/Title';
import { colors } from 'theme';

type PostListTitleProps = {
  title: string;
  count: number;
} & React.HTMLAttributes<HTMLDivElement>;

const PostListTitle = ({ title, count }: PostListTitleProps) => {
  return (
    <div css={container}>
      <Title headingNumber={3} css={titleStyle}>
        {title}
      </Title>
      <span css={countStyle}>{count}</span>
    </div>
  );
};

const container = css`
  display: flex;
`;

const titleStyle = css`
  font-weight: 700;
`;

const countStyle = css`
  color: ${colors.darkGray};
  font-size: 1.2rem;
  margin-left: 1rem;
  line-height: 1.8;
`;

export default PostListTitle;
