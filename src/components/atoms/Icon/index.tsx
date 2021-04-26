import icon from './SVG';

type IconProps = {
  name: string;
  size: number;
};

const Icon = ({ name, size }: IconProps) => {
  const SVGIcon = icon[name];
  return <SVGIcon size={size} />;
};

export default Icon;
