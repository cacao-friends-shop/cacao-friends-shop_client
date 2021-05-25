import { ContentType } from 'pages/AdminEdit/template';
import { useState } from 'react';
import PostTitle from '.';

export default {
  component: PostTitle,
  title: 'atoms/PostTitle',
};

// 기본 포스트 타이틀
export const PostTitleBlock = () => {
  const [data, setData] = useState<ContentType>({
    title: '',
    content: '',
    characterType: '',
    createdDateTime: new Date().toISOString(),
    imageUrls: null,
  });
  return <PostTitle value={data.title} setData={setData} />;
};
