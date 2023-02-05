import React from 'react';
import { Svg, Path } from 'react-native-svg';

import { scale } from '@/constants/scale';
import { Colors } from '@/constants/colors';

export const FbAuthSVG = ({ width = scale(8), height = scale(17), fill = Colors.white }) => (
  <Svg width={width} height={height} viewBox="0 0 8 17" fill="none">
    <Path
      d="M7.01602 8.46869H4.87477V16.3133H1.63059V8.46869H0.0876465V5.7118H1.63059V3.92778C1.63059 2.65202 2.2366 0.654297 4.90365 0.654297L7.30672 0.66435V3.34038H5.56313C5.27713 3.34038 4.87498 3.48327 4.87498 4.09185V5.71437H7.29945L7.01602 8.46869Z"
      fill={fill}
    />
  </Svg>
);
