import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 3499.1 2870.5" width={24} height={24} {...props}>
    <Path
      fill="#fff"
      d="M11.9 2384.1v474.5h474.5c-.1-261-213.6-474.5-474.5-474.5zm0-628.6v320.3c438.9 0 794.7 355.8 794.7 794.7h320.3c-11.9-616.8-510.1-1115-1115-1115zm2858.6-1115h-2230v261C1269.2 1103.1 1767.3 1601.3 1969 2230h889.6V640.5h11.9zM11.9 1115v320.3c794.7 0 1435.2 640.5 1435.2 1435.2h308.4c0-972.7-782.9-1755.5-1743.6-1755.5zM3190.7 0H320.3C142.3 0 0 142.3 0 320.3v474.5h320.3V320.3h2858.6v2218.1h-1115v320.3h1115c177.9 0 320.3-142.3 320.3-320.3V320.3C3499.1 142.3 3356.8 0 3190.7 0z"
    />
  </Svg>
);

const Cast = memo(SvgComponent);
export default Cast;
