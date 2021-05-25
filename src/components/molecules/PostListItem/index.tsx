import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { colors } from 'theme';
import CheckBox from 'components/atoms/CheckBox';
import Title from 'components/atoms/Title';
import PostInfo from 'components/atoms/PostInfo';
import DeleteModal from 'components/organisms/DeleteModal';
import { useDisclosure } from '@chakra-ui/react';

type PostListProps = {
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
  /** 이동할 경로 아이디 */
  to: number;
} & React.LiHTMLAttributes<HTMLLIElement>;

const PostList = ({
  title,
  likeCount,
  writer,
  date,
  commentsCount,
  to,
  ...restProps
}: PostListProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <li css={style} {...restProps}>
      <div className="post_info">
        <CheckBox color={colors.adminGray} />
        <div>
          <Link to={`/admin/posts/${to}`} className="title">
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
        <button onClick={onOpen}>삭제</button>
        {isOpen && <DeleteModal isOpen={isOpen} onClose={onClose} id={to} />}
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
  margin-bottom: 0.1rem;

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
    a,
    button {
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
      border: 1px solid ${colors.adminGray};
    }

    button {
      padding: 0.7rem 1rem;
    }

    a + button {
      margin-left: 0.5rem;
    }

    a:hover,
    button:hover {
      box-shadow: 0 0 5px 1px ${colors.adminGray};
      background-color: ${colors.white};
    }
  }
`;

export default PostList;
