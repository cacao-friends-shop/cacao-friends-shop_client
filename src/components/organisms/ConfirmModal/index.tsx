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
import { addPost, deletePost, editPost } from 'modules/posts/postsSlice';
import { EditPostType } from 'modules/posts/types';
import { ContentType } from 'pages/AdminWrite/template';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fontSizes } from 'theme';

type ConfirmModalProps = {
  title: string;
  content: string;
  buttonType: string;
  id: number;
  data: ContentType | EditPostType;
  isOpen: boolean;
  onClose: () => void;
};

const ConfirmModal = ({
  title,
  content,
  buttonType,
  id,
  data,
  isOpen,
  onClose,
}: ConfirmModalProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    if (buttonType === '삭제') return dispatch(deletePost(id));
    if (buttonType === '등록') {
      dispatch(addPost(data));
      setTimeout(() => history.push('/admin/posts'), 300);
    }
    if ('id' in data && buttonType === '수정') {
      dispatch(editPost(data));
      setTimeout(() => history.push('/admin/posts'), 300);
    }
    if (buttonType === '나가기') history.push('/admin/posts');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader css={modalTitleStyle}>
          <h1>{title}</h1>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody css={modalContentStyle}>
          <p>{content}</p>
        </ModalBody>
        <ModalFooter css={modalFooterStyle}>
          <Button colorScheme="blackAlpha" size="lg" mr={5} onClick={onClose}>
            취소
          </Button>
          <Button colorScheme="blue" size="lg" onClick={handleClick}>
            {buttonType}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ConfirmModal.defaultProps = {
  id: 0,
  data: null,
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

export default ConfirmModal;
