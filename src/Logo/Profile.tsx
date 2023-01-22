import * as React from 'react';
import Svg, {SvgProps, G, Circle, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: animate */

import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 200 200"
    style={{
      background: '#86A546',
    }}
    {...props}>
    <G fill="none" fillRule="evenodd">
      <G fill="#FCFDFF">
        <G transform="translate(31 50)">
          <Circle id="left-eye" cx={12} cy={12} r={12} />
          <Circle id="right-eye" cx={123} cy={12} r={12} />
          <Path d="M89.5 66.67c13.55 0 27.1-5.93 40.66-17.78 1.3-.53 2.58-.2 3.87 1 1.3 1.17 1.3 2.7 0 4.54C119.5 67.48 104.67 74 89.5 74c-15.17 0-30-6.52-44.53-19.56-1.3-1.85-1.3-3.37 0-4.55 1.3-1.2 2.58-1.53 3.87-1C62.4 60.73 75.94 66.66 89.5 66.66z" />
        </G>
      </G>
    </G>
  </Svg>
);

const Profile = memo(SvgComponent);
export default Profile;
