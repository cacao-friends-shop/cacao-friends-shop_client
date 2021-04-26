import React from 'react';
import icon from './SVG';

type IconProps = {
  name: string;
};

const Icon = ({ name }: IconProps) => {
  const SVGIcon = icon[name];
  return <SVGIcon />;
};

export default Icon;
