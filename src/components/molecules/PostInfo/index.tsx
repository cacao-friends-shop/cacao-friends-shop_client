import Icon from 'components/atoms/Icon';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';
import { css } from '@emotion/react';
import { colors } from 'theme';

type PostInfoProps = {
  likeCount: number;
  writer: string;
  date: string;
  commentsCount: number;
} & React.HTMLAttributes<HTMLUListElement>;

const PostInfo = ({
  likeCount,
  writer,
  date,
  commentsCount,
  ...restProps
}: PostInfoProps) => {
  return (
    <ul css={style} {...restProps}>
      <li className="like">
        <A11yHiddenHeading comp="h3">좋아요</A11yHiddenHeading>
        <Icon name="fillHeart" size={18} />
        <span>36</span>
      </li>
      <li>
        <A11yHiddenHeading comp="h3">작성자</A11yHiddenHeading>
        <span>iamkjw</span>
      </li>
      <li>
        <A11yHiddenHeading comp="h3">날짜</A11yHiddenHeading>
        <span>2021-04-29</span>
      </li>
      <li className="comments">
        <h3>댓글</h3>
        <span>3</span>
      </li>
    </ul>
  );
};

const style = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.gray};
  font-size: 1.4rem;

  li + li {
    margin-left: 1.2rem;
  }

  .like {
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5rem;
    }
  }

  .comments {
    h3 {
      font-weight: 400;
    }
    display: flex;
    align-items: center;
    font-size: 1.3rem;
  }
`;

export default PostInfo;
