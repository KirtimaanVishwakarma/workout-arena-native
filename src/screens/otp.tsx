import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../utils/colorScheme';
import FormButton from '../components/Button';
import OtpInput from '../components/otpInput';

const Otp = ({navigation}: any) => {
  const [timeLeft, setTimeLeft] = useState(59); // 1 minute countdown (60 seconds)

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount or reset
  }, [timeLeft]);

  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs} sec`; // Format time as mm:ss
  };

  return (
    <ScrollView style={styles.scroll}>
      <ImageBackground
        source={require('../assets/images/loginBackground.jpg')}
        style={styles.container}
        blurRadius={4}
        resizeMode="cover">
        <View style={styles.body}>
          <Text style={styles.title}>
            Enter the 4 digit code send to you at 7985036925
          </Text>
          <View style={styles.inputFelid}>
            <OtpInput/>
          </View>
          <View>
            <Text>{formatTime(timeLeft)}</Text>
            <View style={{flex: 1, flexDirection: 'row', gap: 5}}>
              <Text style={styles.smallText}>Didn't received OTP?</Text>
              <Pressable>
                <Text style={{color: Colors.primary}}> Resend OTP</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={{marginTop: 60, width: '100%', flex: 1, alignItems: 'center'}}>
          <FormButton
            title="Verify"
            btnStyles={{width: '90%', padding: 14}}
            // onPress={() => navigation.navigate('otp')}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  scroll: {
    height: '100%',
    flex: 1,
  },
  container: {
    width: '100%',
    height: '150%',
    paddingTop: 100,
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  smallText: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '100',
  },
  body: {
    display: 'flex',
    gap: 40,
    width: '90%',
  },
  inputFelid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    gap: 6,
  },
  country: {
    height: 30,
    width: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.white,
  },
  input: {
    alignItems: 'center',
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    width: '80%',
  },
});
