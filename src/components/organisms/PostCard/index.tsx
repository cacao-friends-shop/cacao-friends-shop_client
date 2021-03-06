import Profile from 'components/molecules/Profile';
import Carousel from 'components/organisms/Carousel';
import Actionbar from 'components/molecules/Actionbar';
import { css } from '@emotion/react';
import useCarouselState from 'hooks/useCarouselState';
import { avatarImgUrl } from 'staticData';

type PostCardProps = {
  /** 캐러셀에 들어갈 이미지 경로 배열 */
  imgList: string[];
  /** 포스트 제목 */
  title: string;
  /** 포스트 내용 */
  content: string;
  /** 포스트 캐릭터 타입 */
  characterType: string;
  /** 포스트 날짜 */
  createdDateTime: string;
  /** 포스트 좋아요 갯수 */
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

  const createMarkup = () => {
    return { __html: content };
  };

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
          좋아요 <span css={likeCountStyle}>{likeCount ? likeCount : 0}개</span>
        </span>
      </div>
      <h3 css={titleStyle}>{title}</h3>
      <p
        css={{ fontSize: '1.4rem' }}
        dangerouslySetInnerHTML={createMarkup()}
      ></p>
      {children}
    </article>
  );
};

const articleStyle = css`
  max-width: 64rem;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 1rem;

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
