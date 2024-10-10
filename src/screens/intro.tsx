import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from '../utils/style';
import FormButton from '../components/Button';
import Colors from '../utils/colorScheme';

const Intro = ({navigation}: any) => {

  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require('../assets/images/intro.jpg')}
        style={Styles.container}>
        <View style={Styles.introCard}>
          <Text style={[Styles.whiteText, Styles.largeText]}>
            Increase Your Target to be healthier to continue exercise
          </Text>
          <Text style={[Styles.whiteText, Styles.smallText]}>
            This application can improve yourself to have a healthy lifestyle by
            exercise
          </Text>
          <FormButton
            title="Get Started"
            buttonStyle={Styles.primaryButton}
            onPress={()=>navigation.navigate('login')}
          />
          <View style={[styles.flex, styles.registerBtn]}>
            <Text style={Styles.whiteText}>Already have account?</Text>
            <Pressable onPress={() => navigation.navigate('IntroTarget')}>
              <Text style={[styles.primaryColor, styles.registerPadding]}>
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  flex: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  primaryColor: {
    color: Colors.primary,
  },
  registerBtn: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerPadding: {
    padding: 10,
    // backgroundColor: 'red',
  },
});
