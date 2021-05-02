import { css } from '@emotion/react';
import Title from 'components/atoms/Title';
import { colors } from 'theme';

type PostListTitleProps = {
  title: string;
  count: number;
} & React.HTMLAttributes<HTMLDivElement>;

const PostListTitle = ({ title, count }: PostListTitleProps) => {
  return (
    <div css={style_titleContainer}>
      <Title headingNumber={3} css={style_title}>
        {title}
      </Title>
      <span css={style_count}>{count}</span>
    </div>
  );
};

const style_titleContainer = css`
  display: flex;
`;

const style_title = css`
  font-weight: 700;
`;

const style_count = css`
  color: ${colors.darkGray};
  font-size: 1.2rem;
  margin-left: 1rem;
  line-height: 1.8;
`;

export default PostListTitle;
