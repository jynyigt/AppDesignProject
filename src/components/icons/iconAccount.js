import * as React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

function IconAccount({color, height, width, style}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none">
      <Circle cx="20" cy="20" r="20" fill="#F40000" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.7622 15.1273C23.7622 12.757 22.0772 11 19.9989 11C17.921 11 16.2374 12.757 16.2374 15.1273C16.2374 17.4979 17.921 19.4211 19.9989 19.4211C22.0771 19.4211 23.7622 17.4979 23.7622 15.1273ZM27.9545 25.693L27.574 23.9737C27.1025 21.8431 25.1083 20.4163 22.9557 20.6693C21.9752 20.7845 20.9899 20.8421 19.9998 20.8421C19.0097 20.8421 18.0244 20.7845 17.0439 20.6693C14.8913 20.4163 12.8971 21.8431 12.4256 23.9737L12.0451 25.693C12.0151 25.8284 12 25.9666 12 26.1053C12 27.1517 12.8422 28 13.8812 28H26.1184C26.2561 28 26.3933 27.9848 26.5277 27.9546C27.5418 27.7269 28.1806 26.7144 27.9545 25.693Z"
        fill="white"
      />
    </Svg>
  );
}

export default IconAccount;