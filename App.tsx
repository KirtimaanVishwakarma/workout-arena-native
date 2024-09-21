/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Intro from './src/screens/intro';
import Styles from './src/utils/style';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
       <StatusBar
        barStyle={'light-content'}
        backgroundColor={Styles.statusBar.backgroundColor}
      />
      <Intro/>
    </SafeAreaView>
  );
}

export default App;
