import * as React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import store from './src/store';
import Navigation from './src/constants/navigation/navigation';

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <StatusBar
            animated
            backgroundColor="transparent"
            barStyle="dark-content"
            hidden={false}
            translucent
          />
          <Navigation />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
export default App;
