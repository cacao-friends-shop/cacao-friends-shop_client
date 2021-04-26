import { css } from '@emotion/react';
import Icon from 'components/atoms/Icon';

type IconButtonProps = {
  name: string;
};

const IconButton = ({ name }: IconButtonProps) => {
  return (
    <button css={buttonStyle}>
      <Icon name={name} />
    </button>
  );
};

const buttonStyle = css`
  background: red;
`;

export default IconButton;
