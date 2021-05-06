import { css } from '@emotion/react';
import { fontSizes } from 'theme';

type PostTitleProps = {
  /** 포스트 제목 placeholder */
  placeholder?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const PostTitle = ({
  placeholder = '제목을 입력해주세요.',
}: PostTitleProps) => {
  return (
    <label css={titleStyle}>
      <input type="text" placeholder={placeholder} />
    </label>
  );
};

const titleStyle = css`
  width: 100%;
  input {
    font-size: ${fontSizes.xxxl_24};
    padding: 1rem;
    border: none;
    width: 100%;
    outline: none;
  }
`;

export default PostTitle;
