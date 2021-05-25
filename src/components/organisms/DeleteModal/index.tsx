import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { deletePost } from 'modules/posts/postsSlice';
import { useDispatch } from 'react-redux';
import { fontSizes } from 'theme';

type DeleteModalProps = {
  id: number;
  isOpen: boolean;
  onClose: () => void;
};

const DeleteModal = ({ id, isOpen, onClose }: DeleteModalProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(id));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader css={modalTitleStyle}>
          <h1>포스트 삭제</h1>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody css={modalContentStyle}>
          <p>해당 포스트를 정말 삭제하시겠습니까?</p>
        </ModalBody>
        <ModalFooter css={modalFooterStyle}>
          <Button colorScheme="blackAlpha" size="lg" mr={5} onClick={onClose}>
            취소
          </Button>
          <Button colorScheme="blue" size="lg" onClick={handleClick}>
            삭제
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const modalTitleStyle = css`
  h1 {
    padding: 2rem 0 1rem 1rem;
    font-size: ${fontSizes.xxl_22};
  }
`;

const modalContentStyle = css`
  p {
    font-weight: 500;
    padding: 0 0 2em 1rem;
  }
`;

const modalFooterStyle = css`
  button {
    font-size: ${fontSizes.xs_14};
    font-weight: normal;
  }
`;

export default DeleteModal;
