import { Link } from 'react-router-dom';
import Icon from 'components/atoms/Icon';
import { css } from '@emotion/react';
import { colors } from 'theme';

type SortBoxListProps = {
  /** 정렬 모달 옵션 제목 */
  title: string;
  /** 선택시 이동할 to */
  to: string;
  /** 선택 여부 */
  selected: boolean;
} & React.LiHTMLAttributes<HTMLLIElement>;

const SortBoxList = ({
  title,
  to,
  selected,
  ...restProps
}: SortBoxListProps) => {
  return (
    <li css={sortBoxListStyle(selected)} {...restProps}>
      <Link to={to}>
        {title}
        {selected && <Icon name="outlineCheck" size={20} />}
      </Link>
    </li>
  );
};

const sortBoxListStyle = (selected: boolean) => css`
  background-color: ${selected && colors.lightGray};
  color: ${selected && colors.black};

  a {
    position: relative;
    display: flex;
    align-items: center;
    padding: 2rem 1.5rem;
  }

  svg {
    position: absolute;
    right: 3%;
    fill: ${colors.pink};
  }

  &:hover {
    background-color: ${colors.lightGray};
    color: ${colors.darkGray};
  }
`;

export default SortBoxList;
