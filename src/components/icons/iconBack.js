import * as React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

function IconBack() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none">
      <Circle cx="20" cy="20" r="20" fill="#1D1E1C" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.4107 18.9049L17.9048 13.4108C18.1576 13.1579 18.5043 13 18.8521 13C19.2 13 19.5466 13.1258 19.7995 13.4108C20.3361 13.9474 20.3361 14.7997 19.7995 15.3376L16.6416 18.4943H27.662C28.4194 18.4943 29.0202 19.0938 29.0202 19.8524C29.0202 20.6098 28.4207 21.2106 27.662 21.2106H16.6416L19.8317 24.4007C20.3683 24.9373 20.3683 25.7896 19.8317 26.3275C19.2951 26.8641 18.4427 26.8641 17.9049 26.3275L12.4108 20.7999C12.1579 20.547 12 20.2004 12 19.8525C12 19.5047 12.1579 19.1581 12.4108 18.9052L12.4107 18.9049Z"
        fill="white"
      />
    </Svg>
  );
}

export default IconBack;
