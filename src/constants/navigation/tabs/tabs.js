import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import DiscoverScreen from '../../../screens/discoverScreen/discoverScreen';
import HomeScreen from '../../../screens/homeScreen/homeScreen';
import WalletScreen from '../../../screens/walletScreen/walletScreen';
import {
  sceneContainerStyle,
  screenOptionsInit,
  tabBarOptions,
} from '../options';
import TabView from './tabView';

const Tab = createBottomTabNavigator();

function TabScreens() {
  return (
    <Tab.Navigator
      screenOptions={screenOptionsInit}
      options={tabBarOptions}
      initialRouteName="Discover"
      sceneContainerStyle={sceneContainerStyle}
      tabBar={props => <TabView {...props} />}>
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default TabScreens;
