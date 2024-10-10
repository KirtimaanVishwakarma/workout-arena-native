/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Intro from './src/screens/intro';
import Styles from './src/utils/style';
import IntroTarget from './src/screens/introTarget';
import ConditionForm from './src/screens/conditionForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScheduleForm from './src/screens/ScheduleForm';
import Login from './src/screens/login';
import Otp from './src/screens/otp';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator();

const BackBtn = ({navigation}: any) => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Image
      source={require('./src/assets/images/back-icon.png')}
      style={Styles.backIcon}
    />
  </TouchableOpacity>
);
function App(): React.JSX.Element {
  return (
    // <SafeAreaView>
    //   <StatusBar
    //     barStyle={'light-content'}
    //     backgroundColor={Styles.statusBar.backgroundColor}
    //   />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="into"
        screenOptions={{
          headerTransparent: true,
          headerTitle: '',
        }}>
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen
          name="login"
          component={Login}
          options={({navigation}) => ({
            headerLeft: () => <BackBtn navigation={navigation} />,
          })}
        />
         <Stack.Screen
          name="otp"
          component={Otp}
          options={({navigation}) => ({
            headerLeft: () => <BackBtn navigation={navigation} />,
          })}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerLeft: () => <BackBtn navigation={navigation} />,
          })}
          name="IntroTarget"
          component={IntroTarget}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerLeft: () => <BackBtn navigation={navigation} />,
          })}
          name="ConditionForm"
          component={ConditionForm}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerLeft: () => <BackBtn navigation={navigation} />,
          })}
          name="ScheduleTime"
          component={ScheduleForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
