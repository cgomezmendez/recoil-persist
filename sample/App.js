/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';




import { PersistGate, RecoilRoot } from 'recoil-persist';
import { CounterScreen } from './src/screens/counter/counter';
import { SafeAreaView } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <RecoilRoot>
        <CounterScreen />
      </RecoilRoot>
    </>
  );
};

export default App;
