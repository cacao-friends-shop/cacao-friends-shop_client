import Icon from 'components/atoms/Icon';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';
import { css } from '@emotion/react';
import { colors, fontSizes } from 'theme';

type PostInfoProps = {
  /** 좋아요 수 */
  likeCount: number;
  /** 작성자 */
  writer: string;
  /** 글 날짜 */
  date: string;
  /** 댓글수 */
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
    <ul css={postInfostyle} {...restProps}>
      <li className="like">
        <A11yHiddenHeading comp="h3">좋아요</A11yHiddenHeading>
        <Icon name="fillHeart" size={18} />
        <span>{likeCount}</span>
      </li>
      <li className="writer">
        <A11yHiddenHeading comp="h3">작성자</A11yHiddenHeading>
        <span>{writer}</span>
      </li>
      <li className="date">
        <A11yHiddenHeading comp="h3">날짜</A11yHiddenHeading>
        <span>{date}</span>
      </li>
      <li className="comments">
        <h3>댓글</h3>
        <span>{commentsCount}</span>
      </li>
    </ul>
  );
};

const postInfostyle = css`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  color: ${colors.gray};
  font-size: ${fontSizes.xs_14};

  li + li {
    margin-left: 1.2rem;
  }

  .like {
    display: flex;
    align-items: center;
    width: 4.7rem;

    span {
      margin-left: 0.5rem;
    }
  }

  .writer {
    width: 5rem;
  }

  .comments {
    display: flex;
    align-items: center;
    font-size: ${fontSizes.xxs_13};

    h3 {
      font-weight: 400;
      margin-right: 0.3rem;
    }
  }
`;

export default PostInfo;
