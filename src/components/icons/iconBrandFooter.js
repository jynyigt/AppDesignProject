import * as React from 'react';
import {Path, Svg} from 'react-native-svg';

function IconBrandFooter({brandColor}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={305}
      height={377}
      fill="none">
      <Path
        fill={brandColor || '#FF0023'}
        d="M11.055 21.756c.248-7.636.371-11.454 1.938-14.356a14 14 0 0 1 6.117-5.9C22.067.038 25.887.052 33.527.08l248.76.93c7.807.03 11.71.044 14.691 1.572a14 14 0 0 1 6.092 6.107c1.52 2.986 1.525 6.89 1.533 14.696l.359 320.981c.013 11.715.02 17.572-2.292 21.96a20.007 20.007 0 0 1-9.22 8.791c-4.492 2.101-10.343 1.816-22.044 1.247l-239.96-11.682c-11.024-.537-16.537-.805-20.67-3.145a19.996 19.996 0 0 1-8.296-8.996c-1.997-4.309-1.818-9.825-1.461-20.857L11.055 21.756Z"
      />
    </Svg>
  );
}

export default IconBrandFooter;