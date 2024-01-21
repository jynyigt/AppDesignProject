import React from 'react';
import {Pressable} from 'react-native';
import IconArrowDown from '../../../components/icons/iconArrowDown';
import headerLeftStyle from './styles/headerLeftStyle';

function HeaderLeft({navigation}) {
  return (
    <Pressable
      onPress={() => navigation?.goBack()}
      activeOpacity={0}
      style={headerLeftStyle.container}>
      <IconArrowDown
        color="#00384d"
        style={headerLeftStyle.icon}
        width={16}
        height={16}
      />
    </Pressable>
  );
}

export default HeaderLeft;
