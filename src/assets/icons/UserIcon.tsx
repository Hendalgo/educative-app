import React from 'react';
import {Path, Svg, G, Circle} from 'react-native-svg';

const UserIcon = (): React.JSX.Element => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/*@ts-ignore*/}
      <G id="User_duotone">
        <Circle id="Ellipse 46" cx="12" cy="8" r="4" fill="#0D4D98" />
        <Path
          id="Intersect"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0002 13C8.33045 13 5.32028 15.4204 5.02408 18.5004C4.99764 18.7753 5.22401 19 5.50015 19H18.5002C18.7763 19 19.0027 18.7753 18.9762 18.5004C18.68 15.4204 15.6699 13 12.0002 13Z"
          fill="#569EF0"
        />
      </G>
    </Svg>
  );
};

export default UserIcon;
