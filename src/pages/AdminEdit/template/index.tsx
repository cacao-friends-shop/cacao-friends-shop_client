import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import PostTitle from 'components/atoms/PostTitle';
import { ContentType } from 'pages/AdminWrite/template';
import { useEffect, useRef, useState } from 'react';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import Button from 'components/atoms/Button';
import { colors, fontSizes } from 'theme';
import ConfirmModal from 'components/organisms/ConfirmModal';
import { useDisclosure, Select } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { EditPostType } from 'modules/posts/types';

type TemplateType = {
  id: number;
  content: EditPostType;
};

const Template = ({ id, content }: TemplateType) => {
  const [data, setData] = useState<EditPostType | ContentType>({
    id,
    title: '',
    content: '',
    characterType: '',
    createdDateTime: new Date().toISOString().slice(0, 15),
    imageUrls: null,
  });
  const [btnType, setBtnType] = useState('');
  const editorRef = useRef<Editor>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setData(content);
  }, [content]);

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
        value={data.characterType}
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
        initialValue={content.content}
        onChange={() => {
          setData((prevState: EditPostType | ContentType) => {
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
          onClick={() => {
            setBtnType('cancle');
            onOpen();
          }}
        >
          취소
        </Button>
        <Button
          borderRadius="20px"
          bgColor={colors.black}
          color={colors.white}
          onClick={() => {
            setBtnType('confirm');
            onOpen();
          }}
          css={buttonStyle('confirm')}
        >
          수정
        </Button>
        {isOpen && (
          <ConfirmModal
            title={
              btnType === 'confirm'
                ? '포스트 수정'
                : '사이트에서 나가시겠습니까?'
            }
            content={
              btnType === 'confirm'
                ? '글을 수정하시겠습니까?'
                : '변경사항이 저장되지 않을 수 있습니다.'
            }
            buttonType={btnType === 'confirm' ? '수정' : '나가기'}
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

export default Template;
