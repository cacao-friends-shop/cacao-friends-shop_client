import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import { colors, fontSizes } from 'theme';
import { useSelector, useDispatch } from 'react-redux';
import {
  loginSuccess,
  nicknameUpdateAction,
  userDeleteAction,
} from 'modules/User/actions';
import { useHistory } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { RootState } from 'modules';

const UserInfoUpdate = () => {
  const { authUser: user } = useSelector((state: RootState) => state.user);
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();

  //modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    setNickname(user?.nickname || '');
    if (userInfo && !user) {
      dispatch(loginSuccess(userInfo));
    }
  }, [user]);

  const cancel = () => {
    setNickname('');
  };

  const save = () => {
    dispatch(nicknameUpdateAction(nickname));
    history.push('/');
  };

  const deleteUser = () => {
    try {
      const res = dispatch(userDeleteAction(password));
      console.log(res);
    } catch (error) {
      console.log(error.message);
      alert('패스워드가 맞지 않습니다.');
    }
    // history.push('/');
  };

  return (
    <section css={container}>
      <Title headingNumber={1}>정보수정</Title>
      <Input
        css={updateInputStyle}
        type="text"
        title="nickname"
        id="nickname"
        name="nickname"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNickname(e.target.value)
        }
        label="닉네임"
        value={nickname}
      />
      <div css={buttonContainer}>
        <Button
          css={firstButtonStyle}
          onClick={() => cancel()}
          bgColor="#ffffff"
        >
          취소
        </Button>
        <Button bgColor="#3C404B" color="#fffff" onClick={() => save()}>
          저장
        </Button>
        <Button bgColor="#d11a2a" color="#fffff" onClick={onOpen}>
          아이디 지우기
        </Button>

        <Modal
          initialFocusRef={initialRef.current}
          finalFocusRef={finalRef.current}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent css={modalContentStyle}>
            <ModalHeader>아이디 삭제</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>패스워드를 입력해주세요</FormLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  title="password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  ref={initialRef.current}
                  placeholder="패스워드"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={deleteUser}>지우기</Button>
              <Button onClick={onClose}>취소</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};

const container = css`
  width: 100%;
  height: 100%;
  padding: 0px 16px calc(100vh - 478px);

  margin: 0 auto;
  max-width: 64rem;
  h1 {
    font-size: ${fontSizes.xxxl_24};
    padding: 3.1rem 0 2.2rem;
  }
`;

const updateInputStyle = css`
  margin-top: 3.5rem;
  input[type='text'] + label {
    top: -4.5rem;
    font-size: ${fontSizes.sm_15};
    color: ${colors.black};
  }
  input[type='text'] {
    border: 1px solid rgb(227, 229, 232);
    border-radius: 0.4rem;
    padding-left: 2rem;
  }
`;
const buttonContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;

  button {
    border-radius: 0.4rem;
    width: 100%;
  }
  button + button {
    margin-left: 2rem;
  }
`;
const firstButtonStyle = css`
  border: 1px solid rgb(227, 229, 232);
`;

const modalContentStyle = css`
  header {
    padding-top: 20px;
    margin-bottom: 30px;
    font-size: 2rem;
  }
  button {
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background-color: #d11a2a;
    color: #fff;
  }
  button + button {
    margin-left: 1rem;
    background-color: #3c404b;
  }
`;
export default UserInfoUpdate;
