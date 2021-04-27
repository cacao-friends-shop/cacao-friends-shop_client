import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

type LinkIconButtonProps = {
  /** 아이콘 방향 */
  type: string;
  /** 아이콘 이름 */
  iconName: string;
  /** 아이콘 사이즈 */
  iconSize: number;
  /** 버튼 배경색 */
  bgColor: string;
  /** 버튼 텍스트 */
  children: React.ReactNode;
};

const LinkIconButton = ({
  type = 'leftIcon',
  iconName = 'arrowRight',
  iconSize = 20,
  bgColor = 'transparent',
  children,
  ...restProps
}: LinkIconButtonProps) => {
  const LeftIcon = (
    <Button bgColor={bgColor} css={style}>
      <Icon name={iconName} size={iconSize} />
      <span>{children}</span>
    </Button>
  );

  const RightIcon = (
    <Button bgColor={bgColor} css={style}>
      <span>{children}</span>
      <Icon name={iconName} size={iconSize} />
    </Button>
  );

  return (
    <Link to="/" {...restProps}>
      {type === 'rightIcon' ? RightIcon : LeftIcon}
    </Link>
  );
};

const style = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LinkIconButton;
