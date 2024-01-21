import HeaderLeft from './header/headerLeft';

const tabBarOptions = {
  activeTintColor: '#1D1E1C',
  inactiveTintColor: '#a0b4bc',
  showLabel: false,
};
const screenOptionsWithBlur = ({route, navigation}) => ({
  headerShown: true,
  unmountOnBlur: true,
  tabBarStyle: {
    borderTopWidth: 0,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 18,
    color: '#00384d',
  },
});
const screenOptionsInit = ({route, navigation}) => ({
  headerShown: true,
  unmountOnBlur: false,
  tabBarStyle: {
    borderTopWidth: 0,
  },
  headerLeft: () => <HeaderLeft navigation={navigation} />,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 18,
    color: '#00384d',
  },
});
const screenOptions = ({route, navigation}) => ({
  headerShown: true,
  unmountOnBlur: true,
  tabBarStyle: {
    borderTopWidth: 0,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 18,
    color: '#00384d',
  },
});
const sceneContainerStyle = {
  backgroundColor: '#ffffff',
  paddingBottom: 0,
  marginBottom: -15,
};

export {
  sceneContainerStyle,
  screenOptions,
  screenOptionsInit,
  screenOptionsWithBlur,
  tabBarOptions,
};
