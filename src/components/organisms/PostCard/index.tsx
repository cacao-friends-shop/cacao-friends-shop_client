import Profile from 'components/molecules/Profile';
import { useState } from 'react';
import Carousel from 'components/organisms/Carousel';
import Actionbar from 'components/molecules/Actionbar';
import { css } from '@emotion/react';
import Comment from 'components/atoms/Comment';
import { Link } from 'react-router-dom';
import CommentTextArea from 'components/atoms/CommentTextArea';

type PostCardProps = {
  /** 캐러셀에 들어갈 이미지 경로 배열 */
  imgList: string[];
};

const PostCard = ({ imgList }: PostCardProps) => {
  const [[currentIdx, direction], setSlide] = useState([0, 0]);

  const slideMove = (newDirection: number) => {
    setSlide([currentIdx + newDirection, newDirection]);
  };

  const handlePrev = () => {
    if (currentIdx <= 0) return;
    slideMove(-1);
  };

  const handleNext = () => {
    if (currentIdx >= imgList.length - 1) return;
    slideMove(1);
  };
  return (
    <article css={articleStyle}>
      <div>
        <Profile
          imagePath="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144557.png"
          alt="콘"
          title="프렌즈도감"
          time="1시간 전"
          desc="Dailty Story"
        />
      </div>
      <div>
        <Carousel
          imgList={imgList}
          direction={direction}
          currentIdx={currentIdx}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
      <div>
        <Actionbar imgLength={imgList.length} currentIdx={currentIdx} />
      </div>
      <div>
        <span css={{ fontSize: '1.3rem' }}>
          좋아요 <span css={likeCountStyle}>908개</span>
        </span>
      </div>
      <h3 css={titleStyle}>
        저녁형 하마🦛
        <br />
        명탐정 콥
      </h3>
      <p css={{ fontSize: '1.4rem' }}>
        스노우타운의 명탐정 콥은 늦잠꾸러기 일까❓
      </p>
      <Link to="/" css={commentCountStyle}>
        댓글 543개
        <Comment name="김지원" comment="나 좀 알려줘~~~" />
        <CommentTextArea placeholder="댓글을 달아주세요." />
      </Link>
    </article>
  );
};

const articleStyle = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;

  & > div + div {
    margin-top: 1rem;
  }
`;

const likeCountStyle = css`
  font-weight: bold;
`;

const titleStyle = css`
  font-weight: bold;
  font-size: 1.8rem;
  margin: 1rem 0;
`;

const commentCountStyle = css`
  display: block;
  color: #aaa;
  margin: 1rem 0;
  font-size: 1.2rem;
  p {
    margin-top: 1rem;
  }
`;
export default PostCard;