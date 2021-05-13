import { useState } from 'react';
import SideBarModal from './index';

export default {
  title: 'organisms/SideBarModal',
  component: SideBarModal,
};

export const SideBarModalBlock = () => {
  const [isShow, setIsShow] = useState(false);
  return <SideBarModal setIsShow={setIsShow} />;
};

SideBarModalBlock.storyName = '사이드바 모달';
