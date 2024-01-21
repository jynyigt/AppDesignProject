import React from 'react';
import {View} from 'react-native';
import tabViewStyle from './styles/tabViewStyle';
import TabItemView from './tabItemView';
import {Shadow} from 'react-native-shadow-2';

function TabView({state, navigation}) {
  const isFocusedIndex = state.index;
  return (
    <Shadow
      distance={7}
      offset={[0, 0]}
      startColor="rgba(0, 0, 0, 0.05)"
      paintInside={false}>
      <View style={tabViewStyle.container}>
        <TabItemView
          navigation={navigation}
          name="Discover"
          focused={isFocusedIndex === 0}
          tabBarLabel={'KEŞFET'}
        />
        <TabItemView
          navigation={navigation}
          name="Home"
          focused={isFocusedIndex === 1}
        />
        <TabItemView
          navigation={navigation}
          name="Wallet"
          focused={isFocusedIndex === 2}
          tabBarLabel="DAHA CÜZDAN"
        />
      </View>
    </Shadow>
  );
}
export default TabView;
