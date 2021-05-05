import React, { useState } from 'react';
import ModalOverlay from 'components/atoms/ModalOverlay';
import SortBox from 'components/atoms/SortBox';

const SortModal = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {isShow && (
        <>
          <ModalOverlay onClick={() => setIsShow(false)} />
          <SortBox />
        </>
      )}
    </>
  );
};

export default SortModal;
