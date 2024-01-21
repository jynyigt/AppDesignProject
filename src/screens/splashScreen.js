import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => navigation.navigate('LoggedIn'), 1500);
  }, []);
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
}

export default SplashScreen;
