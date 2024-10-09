import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../utils/colorScheme';

const IntroScreen = ({
  children,
  targetText1,
  targetText2,
  slogan,
  navigation,
}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.targetHeader}>
        <Text style={styles.targetText}>{targetText1}</Text>
        <Text style={styles.targetText}>{targetText2}</Text>
        <Text style={styles.slogan}>{slogan}</Text>
      </View>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  childrenContainer: {
    height: '70%',
    paddingBottom: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  targetHeader: { marginVertical: 20,},
  targetText: {fontSize: 40, fontWeight: 'bold', color: Colors.white},
  slogan: {
    marginTop: 20,
    fontSize: 16,
    color: Colors.white,
    width: '80%',
    lineHeight: 25,
    fontWeight: '300',
  },
});
