import React, { useState, useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { css } from '@emotion/react';
import 'tui-color-picker/dist/tui-color-picker.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { colors, fontSizes } from 'theme';
import Button from 'components/atoms/Button';
import PostTitle from 'components/atoms/PostTitle';
import { Select, useDisclosure } from '@chakra-ui/react';
import ConfirmModal from 'components/organisms/ConfirmModal';

export type ContentType = {
  title: string;
  content: string;
  characterType: string;
  createdDateTime: string;
  imageUrls: string[] | null;
};

const Templates = () => {
  const [data, setData] = useState<ContentType>({
    title: '',
    content: '',
    characterType: '',
    createdDateTime: new Date().toISOString(),
    imageUrls: null,
  });
  const editorRef = useRef<Editor>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div css={container}>
      <PostTitle value={data.title} setData={setData} />
      <Select
        variant="filled"
        size="lg"
        placeholder="캐릭터 타입"
        onChange={e =>
          setData(prevState => ({
            ...prevState,
            characterType: e.target.value,
          }))
        }
      >
        <option value="라이언">라이언</option>
        <option value="어피치">어피치</option>
        <option value="무지">무지</option>
        <option value="네오">네오</option>
        <option value="프로도">프로도</option>
      </Select>
      <Editor
        previewStyle="vertical"
        height="700px"
        initialEditType="wysiwyg"
        plugins={[colorSyntax]}
        ref={editorRef}
        onChange={() => {
          setData((prevState: ContentType) => {
            if (editorRef.current) {
              return {
                ...prevState,
                content: editorRef.current.getInstance().getHtml(),
              };
            }
            return prevState;
          });
        }}
      />
      <div css={btnContainer}>
        <Button
          borderRadius="20px"
          bgColor={colors.lightGray}
          color={colors.darkGray}
          css={buttonStyle('cancle')}
        >
          취소
        </Button>
        <Button
          borderRadius="20px"
          bgColor={colors.black}
          color={colors.white}
          onClick={onOpen}
          css={buttonStyle('confirm')}
        >
          완료
        </Button>
        {isOpen && (
          <ConfirmModal
            title="포스트 등록"
            content="글을 등록하시겠습니까?"
            buttonType="등록"
            isOpen={isOpen}
            onClose={onClose}
            data={data}
          />
        )}
      </div>
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
  padding-top: 3rem;

  label + div {
    margin-top: 1.5rem;
  }

  label::after {
    content: '';
    margin-top: 1rem;
    display: block;
    width: 100%;
    border-bottom: 1px solid ${colors.lightGray};
  }

  .chakra-select__wrapper {
    margin-bottom: 1rem;
  }
`;

const btnContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  button + a {
    margin-left: 5rem;
  }
`;

const buttonStyle = (type: string) => css`
  padding: 1.7rem 6rem;
  font-size: ${fontSizes.base_16};
  transition: background-color 0.2s ease-in;
  margin-right: 1.5rem;

  &:hover {
    background-color: ${type === 'cancle' ? colors.yellow : colors.pink};
    color: ${type === 'cancle' ? colors.darkGray : colors.white};
  }
`;

export default Templates;
