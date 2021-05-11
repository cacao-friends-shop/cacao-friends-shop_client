import { useState } from 'react';
import SortBox from '.';
import { options } from 'staticData/index';

export default {
  component: SortBox,
  title: 'molecules/SortBox',
};

// 기본 정렬 박스
export const SortBoxList = () => {
  const [isShow, setIsShow] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <SortBox
      options={options}
      setIsShow={setIsShow}
      selectedIdx={selectedIdx}
      setSelectedIdx={setSelectedIdx}
    />
  );
};
