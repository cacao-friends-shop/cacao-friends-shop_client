import { css } from '@emotion/react';
import Button from 'components/atoms/Button';
import CheckBox from 'components/atoms/CheckBox';
import { colors } from 'theme';
import IconButton from 'components/molecules/IconButton';

const ControlBar = ({ ...restProps }) => {
  return (
    <div css={style} {...restProps}>
      <div>
        <CheckBox className="checkbox" />
        <Button bgColor="transparent" width="20" disabled={true}>
          삭제
        </Button>
      </div>
      <IconButton name="search" size={20} />
    </div>
  );
};

const style = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${colors.adminBorderGray};
  padding: 1.3rem 1.5rem;
  border-radius: 3px;
  margin-top: 1rem;

  button {
    padding: 0;
    margin-left: 1.5rem;
    vertical-align: top;
  }

  button[disabled] {
    color: ${colors.gray};
  }

  .checkbox {
    svg {
      fill: ${colors.adminGray};
    }
  }
`;

export default ControlBar;
