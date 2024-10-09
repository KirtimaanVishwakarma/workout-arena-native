import React from 'react';
import IntroScreen from '../components/introScreen';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../utils/colorScheme';
import FormButton from '../components/Button';
import Styles from '../utils/style';

const ConditionForm = ({navigation}: any) => {
  const lists = [
    {
      label: 'Height',
      value: '180 cm',
    },
    {
      label: 'Weight',
      value: '90 kg',
    },
    {
      label: 'Gender',
      value: 'Male',
    },
    {
      label: 'Age',
      value: '28',
    },
  ];
  const renderItem = ({item}: any) => (
    <View style={styles.cards}>
      <Text style={styles.label}>{item?.label}</Text>
      <Text style={styles.value}>{item?.value}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../assets/images/yogaBackground.jpg')}
      style={Styles.container}
      blurRadius={4}>
      <IntroScreen
        navigation={navigation}
        targetText1={'Your Current'}
        targetText2={'Condition'}
        slogan={`We need your current information to determine the training method`}>
        <View style={styles.container}>
          <FlatList
            data={lists}
            renderItem={renderItem}
            keyExtractor={item => item.label}
          />
          <View style={styles.btnSection}>
            <View style={styles.btn}>
              <FormButton
                title={'Previous'}
                isPrimaryBtn={false}
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={styles.btn}>
              <FormButton
                title={'Continue'}
                onPress={() => navigation.navigate('ScheduleTime')}
                btnStyles={{backgroundColor: Colors.grayOpacity}}
                btnTextStyle={{color: Colors.white}}
              />
            </View>
          </View>
        </View>
      </IntroScreen>
    </ImageBackground>
  );
};

export default ConditionForm;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  btnSection: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  btn: {
    flex: 1,
  },
  icon: {
    height: 40,
    width: 40,
  },
  cards: {
    borderColor: Colors.white,
    paddingVertical: 4,
  },
  label: {
    fontWeight: '400',
    fontSize: 14,
    color: Colors.white,
    marginBottom: 8,
  },
  value: {
    borderWidth: 0.2,
    padding: 16,
    borderRadius: 8,
    borderColor: Colors.white,
    fontWeight: '500',
    fontSize: 16,
    color: Colors.white,
  },
});
