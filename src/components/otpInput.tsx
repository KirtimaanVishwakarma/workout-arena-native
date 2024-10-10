import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Colors from '../utils/colorScheme';

const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    // Move to next input when digit is entered
    if (text && index < 3) {
      const nextInput = index + 1;
      if (nextInput < 4) {
        inputRefs[nextInput].focus();
      }
    }

    // Move to previous input when deleting
    if (!text && index > 0) {
      const prevInput = index - 1;
      inputRefs[prevInput].focus();
    }

    setOtp(newOtp);
  };

  // Array to hold input references
  const inputRefs = [];

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          value={digit}
          onChangeText={text => handleChange(text, index)}
          ref={ref => (inputRefs[index] = ref)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    height: 50,
    width: 40,
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 10,
  },
});

export default OtpInput;
