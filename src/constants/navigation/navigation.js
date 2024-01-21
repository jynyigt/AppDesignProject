import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import LoggedIn from '../../screens/loggedInScreens';
import SplashScreen from '../../screens/splashScreen';
import TabScreens from './tabs/tabs';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoggedIn"
          component={LoggedIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="TabScreens" component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
