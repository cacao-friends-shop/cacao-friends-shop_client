import React from 'react';
import ModalOverlay from 'components/atoms/ModalOverlay';
import SideBar from 'components/molecules/SideBar';
import { colors } from 'theme';

type SideBarModalProps = {
  /** 사이드바 가시여부 상태 */
  setIsShow: (value: React.SetStateAction<boolean>) => void;
};

const SideBarModal = ({ setIsShow }: SideBarModalProps) => {
  return (
    <>
      <ModalOverlay
        onClick={() => setIsShow(false)}
        bgColor={colors.black}
        opacity={0.7}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
      />
      <SideBar
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'none' }}
        exit={{ x: '-100vw', opacity: 0 }}
      >
        <SideBar.Header type="nonLogin" setIsShow={setIsShow} />
        <SideBar.Body setIsShow={setIsShow} />
        <SideBar.Footer type="nonLogin" setIsShow={setIsShow} />
      </SideBar>
    </>
  );
};

export default SideBarModal;
