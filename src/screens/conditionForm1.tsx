import React from 'react';
import IntroScreen from '../components/introScreen';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../utils/colorScheme';
import FormButton from '../components/Button';

const ConditionForm = () => {
  const lists = [
    {
      label: 'Height',
      value: '180 cm',
    },
    {
      label: 'Weight',
      value: '90 kg',
    },
    // {
    //   label: 'Gender',
    //   value: 'Male',
    // },
    // {
    //   label: 'Age',
    //   value: '28',
    // },
  ];
  const renderItem = ({item}: any) => (
    <View style={styles.cards}>
      <Text style={styles.label}>{item?.label}</Text>
      <Text style={styles.value}>{item?.value}</Text>
    </View>
  );

  return (
    <IntroScreen
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
            <FormButton title={'Previous'} isPrimaryBtn={false} />
          </View>
          <View style={styles.btn}>
            <FormButton title={'Continue'} />
          </View>
        </View>
      </View>
    </IntroScreen>
  );
};

export default ConditionForm;

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    height: '60%',
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
    borderColor: Colors.gray,
    paddingVertical: 12,
  },
  label: {
    fontWeight: '400',
    fontSize: 14,
    color: Colors.black,
    marginBottom: 8,
  },
  value: {
    borderWidth: 0.2,
    padding: 16,
    borderRadius: 8,
    fontWeight: '500',
    fontSize: 16,
    color: Colors.black,
  },
});
