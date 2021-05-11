import Profile from 'components/molecules/Profile';
import Carousel from 'components/organisms/Carousel';
import Actionbar from 'components/molecules/Actionbar';
import { css } from '@emotion/react';
import useCarouselState from 'hooks/useCarouselState';
import PostDetailLink from '../PostDetailLink';

type PostCardProps = {
  /** 캐러셀에 들어갈 이미지 경로 배열 */
  imgList: string[];
  children?: React.ReactNode;
};

const PostCard = ({ imgList, children }: PostCardProps) => {
  const { currentIdx, direction, handleNext, handlePrev } = useCarouselState(
    imgList
  );

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
      {children}
    </article>
  );
};

const articleStyle = css`
  max-width: 64rem;
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
  line-height: 1.5;
`;

export default PostCard;
