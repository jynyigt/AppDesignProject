import * as React from 'react';
import {Path, Svg} from 'react-native-svg';

function IconArrowDown({color, height, width, style}) {
  return (
    <Svg
      width={width || 13}
      height={height || 7}
      style={style}
      viewBox="0 0 13 7"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill={color || '#ABBEC4'}
        d="M12.214.23a.8.8 0 0 1 .077 1.043l-.077.09-5 5a.8.8 0 0 1-1.042.077l-.09-.078-5-5A.8.8 0 0 1 2.125.153l.09.078 4.435 4.433L11.083.231a.8.8 0 0 1 1.041-.078l.09.078z"
        fill-rule="nonzero"
      />
    </Svg>
  );
}

export default IconArrowDown;
