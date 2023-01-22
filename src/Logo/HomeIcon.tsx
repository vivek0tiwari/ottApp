import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
import { memo } from "react";
const SvgHomeIcon = (props: SvgProps) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 122.88 112.07"
    style={{
      enableBackground: "new 0 0 122.88 112.07",
    }}
    xmlSpace="preserve"
    width={24}
    height={24}
    {...props}
  >
    <G>
      <Path
        className="st0"
        d="M61.44,0L0,60.18l14.99,7.87L61.04,19.7l46.85,48.36l14.99-7.87L61.44,0L61.44,0z M18.26,69.63L18.26,69.63 L61.5,26.38l43.11,43.25h0v0v42.43H73.12V82.09H49.49v29.97H18.26V69.63L18.26,69.63L18.26,69.63z"
      />
    </G>
  </Svg>
);
const Memo = memo(SvgHomeIcon);
export default Memo;
