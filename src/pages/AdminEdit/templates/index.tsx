import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { css } from '@emotion/react';
import 'tui-color-picker/dist/tui-color-picker.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { colors } from 'theme';

const Templates = () => {
  return (
    <div css={container}>
      <label css={titleStyle}>
        <input type="text" placeholder="제목을 입력해주세요." />
      </label>
      <Editor
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        initialValue="내용을 입력해주세요!"
        plugins={[colorSyntax]}
      />
    </div>
  );
};

const container = css`
  max-width: 64rem;
  margin: 0 auto;
  padding-top: 5rem;

  label + div {
    margin-top: 1rem;
  }
`;

const titleStyle = css`
  width: 100%;
  input {
    padding: 1rem;
    border: none;
    border-bottom: 1px solid ${colors.black};
    width: 100%;
  }
`;

export default Templates;
