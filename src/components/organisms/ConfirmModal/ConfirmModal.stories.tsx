import { useDisclosure } from '@chakra-ui/react';
import ConfirmModal from './';

export default {
  title: 'organisms/ConfirmModal',
  component: ConfirmModal,
};

export const ConfirmModalBlock = () => {
  const { isOpen, onClose } = useDisclosure();
  return (
    <ConfirmModal
      title="포스트 삭제"
      content="정말 삭제하시겠습니까?"
      buttonType="삭제"
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
