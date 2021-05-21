import { ContentType } from 'pages/AdminEdit/template';
import { useState } from 'react';
import PostTitle from '.';

export default {
  component: PostTitle,
  title: 'atoms/PostTitle',
};

// 기본 포스트 타이틀
export const PostTitleBlock = () => {
  const [value, setValue] = useState('');
  const [, setContent] = useState<ContentType>({
    title: '',
    content: '',
    characterType: '',
    createdDateTime: '',
    imageUrls: [],
  });
  return (
    <PostTitle value={value} setValue={setValue} setContent={setContent} />
  );
};
