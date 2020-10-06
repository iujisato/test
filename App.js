import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
;;
import MainScreen from './components/mainScreen.js'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MainScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
