import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import WalletScreen from './walletScreen/walletScreen';
import DiscoverScreen from './discoverScreen/discoverScreen';
import TabScreens from '../constants/navigation/tabs/tabs';
import HomeScreen from './homeScreen/homeScreen';
import BrandDetailScreen from './brandDetailScreen/brandDetail';

const Stack = createNativeStackNavigator();
function LoggedIn() {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#00384d',
        headerTitleStyle: {
          color: '#00384d',
        },
      }}>
      <Stack.Screen
        name="TabScreens"
        component={TabScreens}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BrandDetail"
        component={BrandDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default LoggedIn;
