import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/colorScheme';

const IntroScreen = ({children, targetText1, targetText2, slogan}: any) => {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/back-icon.png')}
          style={styles.backIcon}
        />
        <Text>Process</Text>
      </View>
      <View style={styles.targetHeader}>
        <Text style={styles.targetText}>{targetText1}</Text>
        <Text style={styles.targetText}>{targetText2}</Text>
        <Text style={styles.slogan}>{slogan}</Text>
      </View>
      {children}
    </View>
    // </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    maxHeight: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  targetHeader: {marginVertical: 20},
  targetText: {fontSize: 40, fontWeight: 'bold', color: Colors.black},
  backIcon: {
    width: 30,
    height: 30,
  },
  slogan: {
    marginTop: 20,
    fontSize: 16,
    color: Colors.gray,
    width: '80%',
    lineHeight: 25,
    fontWeight:'300'
  },
});
