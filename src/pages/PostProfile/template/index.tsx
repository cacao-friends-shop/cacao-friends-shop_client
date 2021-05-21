import { css } from '@emotion/react';
import Navbar from 'components/molecules/Navbar';
import PostProfileBox from 'components/molecules/PostProfileBox';
import PostCard from 'components/organisms/PostCard';

const imageList = [
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_1_20210426185905.jpg',
  'https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_2_20210426185905.jpg',
];

type TemplateProps = {
  title: string;
  imgURL: string;
  desc: React.ReactFragment;
};

const Template = ({ title, imgURL, desc }: TemplateProps) => {
  return (
    <div>
      <Navbar title="프로필" />
      <PostProfileBox title={title} imgURL={imgURL} desc={desc} />
      <div css={postCardContainerStyle}>
        {/* <PostCard imgList={imageList} />
        <PostCard imgList={imageList} />
        <PostCard imgList={imageList} />
        <PostCard imgList={imageList} /> */}
      </div>
    </div>
  );
};

const postCardContainerStyle = css`
  margin-top: 1.5rem;
`;

export default Template;
