import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Styles from '../utils/style';
import Colors from '../utils/colorScheme';
import FormButton from '../components/Button';

const Login = ({navigation}:any) => {
  return (
    <ScrollView style={styles.scroll}>
      <ImageBackground
        source={require('../assets/images/loginBackground.jpg')}
        style={styles.container}
        blurRadius={4}
        resizeMode="cover">
        <View style={styles.body}>
          <Text style={styles.title}>What's your phone number?</Text>
          <View style={styles.inputFelid}>
            <Image
              source={require('../assets/images/indianFlag.webp')}
              alt="india"
              style={styles.country}
            />
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Enter your phone number"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.smallText}>
            We will send you a verification code to verify your phone number.
          </Text>
        </View>
        <View style={{marginTop:60, width:'100%', flex:1, alignItems:'center'}}>
          <FormButton title="Proceed" btnStyles={{width: '90%', padding: 14}} onPress={()=>navigation.navigate('otp')}/>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;

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
    fontSize: 40,
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
