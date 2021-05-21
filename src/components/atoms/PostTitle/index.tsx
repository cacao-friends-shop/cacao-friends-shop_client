import { css } from '@emotion/react';
import { ContentType } from 'pages/AdminEdit/template';
import { fontSizes } from 'theme';

type PostTitleProps = {
  /** input value 상태 */
  value: string;
  /** input value 상태 업데이트 함수 */
  setValue: (value: string) => void;
  /** 제목 상태 업데이트 함수 */
  setContent: React.Dispatch<React.SetStateAction<ContentType>>;
  /** 포스트 제목 placeholder */
  placeholder: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const PostTitle = ({
  value,
  setValue,
  setContent,
  placeholder,
}: PostTitleProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setContent((prevState: ContentType) => ({ ...prevState, title: value }));
  };

  return (
    <label css={titleStyle}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

PostTitle.defaultProps = {
  placeholder: '제목을 입력해주세요.',
};

const titleStyle = css`
  width: 100%;
  input {
    font-size: ${fontSizes.xxxl_24};
    border: none;
    width: 100%;
    outline: none;
  }
`;

export default PostTitle;
