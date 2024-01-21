import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import IconAccount from '../icons/iconAccount';
import styles from './customHeaderStyle';

function CustomHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../constants/images/daha.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity>
          <IconAccount />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomHeader;
