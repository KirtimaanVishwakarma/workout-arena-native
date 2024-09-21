import {Button, Pressable, Text} from 'react-native';
import React from 'react';
import Styles from '../utils/style';

const FormButton = ({title, onPress, isPrimaryBtn = true}: ButtonInterface) => {
  const textStyle = isPrimaryBtn
    ? Styles.primaryButtonText
    : Styles.secondaryButtonText;
  const btnStyle = isPrimaryBtn ? Styles.primaryButton : Styles.secondaryButton;
  return (
    <Pressable onPress={onPress} style={btnStyle}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default FormButton;
