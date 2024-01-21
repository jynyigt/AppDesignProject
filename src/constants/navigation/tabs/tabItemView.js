import React, {useCallback} from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import IconDiscover from '../../../components/icons/iconDiscover';
import IconHome from '../../../components/icons/iconHome';
import IconWallet from '../../../components/icons/iconWallet';
import itemViewStyle from './styles/tabItemViewStyle';

function TabItemView({focused, tabBarLabel, name, navigation}) {
  const propsData = {
    width: 25,
    height: 24,
    color1: focused && '#00384D',
    color2: focused && '#FF002B',
  };
  const iconData = {
    Discover: <IconDiscover {...propsData} />,
    Home: <IconHome {...propsData} />,
    Wallet: <IconWallet {...propsData} />,
  };
  const iconList = useCallback(() => {
    if (name === 'Discover') return iconData.Discover;
    if (name === 'Home') return iconData.Home;
    if (name === 'Wallet') return iconData.Wallet;
  }, [focused, name]);
  const openPage = () => {
    navigation.navigate(name);
  };
  if (name === 'Home') {
    return (
      <TouchableOpacity
        onPress={openPage}
        activeOpacity={0.8}
        style={itemViewStyle.homeContainer}>
        <Image
          source={require('../../images/portal.png')}
          style={{width: 69, height: 71}}
        />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={openPage}
      activeOpacity={0.8}
      style={itemViewStyle.item}>
      {iconList()}
      <Text
        style={{
          ...itemViewStyle.itemText,
          color: focused ? '#00384d' : '#a0b4bc',
        }}>
        {tabBarLabel}
      </Text>
    </TouchableOpacity>
  );
}
export default TabItemView;
