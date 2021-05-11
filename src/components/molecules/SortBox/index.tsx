import { css } from '@emotion/react';
import { colors, fontSizes } from 'theme';
import SortBoxList from 'components/atoms/SortBoxLink';

type optionType = {
  id: string;
  label: string;
  to: string;
};

type SortBoxProps = {
  /** 정렬 상자 옵션들 */
  options: Array<optionType>;
  /** 버튼 클릭시 모달 보여지는 여부 상태 변경 함수 */
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  /** 선택한 옵션 인덱스 */
  selectedIdx: number;
  /** 선택한 옵션 인덱스를 변경하는 함수 */
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
};

const SortBox = ({
  options,
  setIsShow,
  selectedIdx,
  setSelectedIdx,
}: SortBoxProps) => {
  const handleClick = (idx: number) => {
    setSelectedIdx(idx);
    setIsShow(false);
  };

  return (
    <ul css={sortBoxStyle}>
      {options.map((option, idx) => (
        <SortBoxList
          key={option.id}
          title={option.label}
          to={option.to}
          selected={selectedIdx === idx}
          onClick={() => handleClick(idx)}
        />
      ))}
    </ul>
  );
};

const sortBoxStyle = css`
  z-index: 1002;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 64rem;
  margin: 0 auto;
  font-size: ${fontSizes.lg_18};
  background-color: ${colors.white};
  color: ${colors.gray};
`;

export default SortBox;
