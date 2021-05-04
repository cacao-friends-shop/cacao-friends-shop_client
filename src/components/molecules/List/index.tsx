import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { colors } from 'theme';
import CheckBox from 'components/atoms/CheckBox';
import Title from 'components/atoms/Title';
import PostInfo from 'components/atoms/PostInfo';

type ListProps = {
  /** 리스트 제목 */
  title: string;
  /** 리스트 좋아요 수 */
  likeCount: number;
  /** 리스트 작성자 */
  writer: string;
  /** 리스트 날짜 */
  date: string;
  /** 리스트 댓글수 */
  commentsCount: number;
} & React.LiHTMLAttributes<HTMLLIElement>;

const List = ({
  title,
  likeCount,
  writer,
  date,
  commentsCount,
  ...restProps
}: ListProps) => {
  return (
    <li css={style} {...restProps}>
      <div className="post_info">
        <CheckBox color={colors.adminGray} />
        <div>
          <Link to="/" className="title">
            <Title headingNumber={2}>{title}</Title>
          </Link>
          <PostInfo
            likeCount={likeCount}
            writer={writer}
            date={date}
            commentsCount={commentsCount}
            className="info_data"
          />
        </div>
      </div>
      <div className="post_btn">
        <Link to="/">수정</Link>
        <Link to="/">삭제</Link>
      </div>
    </li>
  );
};

const style = css`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.adminLightGray};

  .post_info {
    display: flex;
    align-items: center;
  }

  .title {
    &:hover {
      text-decoration: underline;
    }
  }

  label {
    margin-right: 1.3rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  &:hover {
    background-color: ${colors.adminLightGray_02};
    .info_data {
      color: ${colors.darkGray};
      svg {
        fill: ${colors.red};
      }
    }
  }

  .post_btn {
    a {
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
      border: 1px solid ${colors.adminGray};
    }

    a + a {
      margin-left: 0.5rem;
    }

    a:hover {
      box-shadow: 0 0 5px 1px ${colors.adminGray};
    }
  }
`;

export default List;
