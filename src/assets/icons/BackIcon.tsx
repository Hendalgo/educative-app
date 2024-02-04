import React from "react";
import Svg, {Path} from "react-native-svg";

const BackIcon = ({color, size}: {color: string, size: number}): React.JSX.Element => {
  return(
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path d="M5.33325 16L4.62615 15.2929L3.91904 16L4.62615 16.7071L5.33325 16ZM25.3333 17C25.8855 17 26.3333 16.5523 26.3333 16C26.3333 15.4477 25.8855 15 25.3333 15V17ZM12.6261 7.29289L4.62615 15.2929L6.04036 16.7071L14.0404 8.70711L12.6261 7.29289ZM4.62615 16.7071L12.6261 24.7071L14.0404 23.2929L6.04036 15.2929L4.62615 16.7071ZM5.33325 17H25.3333V15H5.33325V17Z" fill={color}/>
    </Svg>
  );
}

export default BackIcon;