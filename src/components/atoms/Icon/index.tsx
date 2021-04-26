import icon from './SVG';

type IconProps = {
  /** 아이콘 이름 */
  name: string;
  /** 아이콘 크기 */
  size: number;
};

const Icon = ({ name, size }: IconProps) => {
  const SVGIcon = icon[name];
  return <SVGIcon size={size} />;
};

export default Icon;
