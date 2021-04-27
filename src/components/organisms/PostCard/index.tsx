import Profile from 'components/molecules/Profile';
import { useState } from 'react';
import Carousel from 'components/organisms/Carousel';
import Actionbar from 'components/molecules/Actionbar';
import { css } from '@emotion/react';
import Comment from 'components/atoms/Comment';
import { Link } from 'react-router-dom';
import CommentTextArea from 'components/atoms/CommentTextArea';

const imageList = [
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_1_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_2_20210426185905.jpg',
];

const PostCard = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    if (currentIdx <= 0) return;
    setCurrentIdx(currentIdx - 1);
  };

  const handleNext = () => {
    if (currentIdx >= imageList.length - 1) return;
    setCurrentIdx(currentIdx + 1);
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
          imgList={imageList}
          currentIdx={currentIdx}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
      <div>
        <Actionbar imgLength={imageList.length} currentIdx={currentIdx} />
      </div>
      <div>
        <span>
          좋아요 <span css={likeCountStyle}>908개</span>
        </span>
      </div>
      <h3 css={titleStyle}>
        저녁형 하마🦛
        <br />
        명탐정 콥
      </h3>
      <p>스노우타운의 명탐정 콥은 늦잠꾸러기 일까❓</p>
      <Link to="/" css={commentCountStyle}>
        댓글 543개
        <Comment name="김지원" comment="나 좀 알려줘~~~" />
        <CommentTextArea />
      </Link>
    </article>
  );
};

const articleStyle = css`
  max-width: 600px;
  margin: 0 auto;

  div + div {
    margin-top: 1.2rem;
  }
`;

const likeCountStyle = css`
  font-weight: bold;
`;

const titleStyle = css`
  font-weight: bold;
  font-size: 1.3rem;
  margin: 1rem 0;
`;

const commentCountStyle = css`
  display: block;
  color: #aaa;
  margin: 1rem 0;

  p {
    margin-top: 1rem;
  }
`;
export default PostCard;
