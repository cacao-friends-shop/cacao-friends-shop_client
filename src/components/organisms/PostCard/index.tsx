import Profile from 'components/molecules/Profile';
import Carousel from 'components/organisms/Carousel';
import Actionbar from 'components/molecules/Actionbar';
import { css } from '@emotion/react';
import useCarouselState from 'hooks/useCarouselState';
import { avatarImgUrl } from 'staticData';

type PostCardProps = {
  /** 캐러셀에 들어갈 이미지 경로 배열 */
  imgList: string[];
  title: string;
  content: string;
  characterType: string;
  createdDateTime: string;
  likeCount: number;
  children?: React.ReactNode;
};

const PostCard = ({
  imgList,
  title,
  content,
  characterType,
  createdDateTime,
  likeCount,
  children,
}: PostCardProps) => {
  const { currentIdx, direction, handleNext, handlePrev } = useCarouselState(
    imgList
  );

  return (
    <article css={articleStyle}>
      <div>
        <Profile
          imagePath={avatarImgUrl[characterType]}
          alt={title}
          title={characterType}
          time={createdDateTime}
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
          좋아요 <span css={likeCountStyle}>{likeCount}개</span>
        </span>
      </div>
      <h3 css={titleStyle}>{title}</h3>
      <p css={{ fontSize: '1.4rem' }}>{content}</p>
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
