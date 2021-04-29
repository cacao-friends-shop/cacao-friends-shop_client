import { css } from '@emotion/react';
import CheckBox from 'components/atoms/CheckBox';
import Title from 'components/atoms/Title';
import { Link } from 'react-router-dom';
import { colors } from 'theme';
import PostInfo from '../PostInfo';

type ListProps = {
  title: string;
  likeCount: number;
  writer: string;
  date: string;
  commentsCount: number;
};

const List = ({ title, likeCount, writer, date, commentsCount }: ListProps) => {
  return (
    <li css={style}>
      <div className="post_info">
        <CheckBox />
        <div>
          <Link to="/" className="title">
            <Title headingNumber={2}>{title}</Title>
          </Link>
          <PostInfo
            likeCount={likeCount}
            writer={writer}
            date={date}
            commentsCount={commentsCount}
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
  border-bottom: 1px solid ${colors.gray};

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
    background-color: ${colors.lightGray};
  }

  .post_btn {
    a {
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
      border: 1px solid ${colors.gray};
    }

    a + a {
      margin-left: 0.5rem;
    }
  }
`;

export default List;
