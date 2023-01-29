import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/constants/colors';
import { scale } from '@/constants/scale';

export const ArrowBackSVG = ({ width = scale(12), height = scale(20), fill = Colors.tundora }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 20" fill={fill}>
      <Path
        d="M10.88 0.88C10.39 0.39 9.6 0.39 9.11 0.88L0.7 9.29C0.31 9.68 0.31 10.31 0.7 10.7L9.11 19.11C9.6 19.6 10.39 19.6 10.88 19.11C11.37 18.62 11.37 17.83 10.88 17.34L3.54 10L10.89 2.65C11.37 2.16 11.37 1.37 10.88 0.88Z"
        fill={fill}
      />
    </Svg>
  );
};
