import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import { scale } from '@/constants/scale';
import { Colors } from '../../constants/colors';

export const LikeFullSVG = ({ width = scale(22), height = scale(20), fill = Colors.burntSienna }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22.44 20.731">
      <G id="Group_58" data-name="Group 58" transform="translate(0.103 0.1)">
        <Path
          d="M10.7,37.307a.909.909,0,0,0,.47.142.826.826,0,0,0,.47-.142c.384-.256,9.411-6.208,10.436-12.259a7.253,7.253,0,0,0-1.338-6.137,5.548,5.548,0,0,0-4.172-1.993,4.045,4.045,0,0,0-1.452.256,10.6,10.6,0,0,0-4.428,3.232,9.044,9.044,0,0,0-3.745-2.919,4.949,4.949,0,0,0-1.609-.256A5.1,5.1,0,0,0,1.55,18.883c-.84.925-1.794,2.691-1.495,5.766C.653,30.7,10.292,37.036,10.7,37.307Z"
          transform="translate(0.001 -16.918)"
          fill={fill}
          stroke={fill}
          strokeWidth={0.2}
        />
      </G>
    </Svg>
  );
};
