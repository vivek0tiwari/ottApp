import * as React from "react";
import Svg, { SvgProps, G, Polygon } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
import { memo } from "react";
const SvgPlayIcon = (props: SvgProps) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 92.2 122.88"
    style={{
      enableBackground: "new 0 0 92.2 122.88",
    }}
    xmlSpace="preserve"
    width={24}
    height={24}
    {...props}
  >
    <G>
      <Polygon className="st0" points="92.2,60.97 0,122.88 0,0 92.2,60.97" />
    </G>
  </Svg>
);
const Memo = memo(SvgPlayIcon);
export default Memo;
