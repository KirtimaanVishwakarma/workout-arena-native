import {Button, Pressable, Text} from 'react-native';
import React from 'react';
import Styles from '../utils/style';

const FormButton = ({
  title,
  onPress,
  isPrimaryBtn = true,
  btnStyles = {},
  btnTextStyle = {},
}: ButtonInterface) => {
  const textStyle = isPrimaryBtn
    ? Styles.primaryButtonText
    : Styles.secondaryButtonText;
  const btnStyle = isPrimaryBtn ? Styles.primaryButton : Styles.secondaryButton;
  return (
    <Pressable onPress={onPress} style={[btnStyle, btnStyles]}>
      <Text style={[textStyle, btnTextStyle]}>{title}</Text>
    </Pressable>
  );
};

export default FormButton;
