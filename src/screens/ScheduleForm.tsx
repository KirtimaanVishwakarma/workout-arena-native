import React, {useState} from 'react';
import IntroScreen from '../components/introScreen';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../utils/colorScheme';
import FormButton from '../components/Button';
import Styles from '../utils/style';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const ScheduleForm = ({navigation}: any) => {
  const lists = [
    {
      label: 'Select start date',
      type: 'date',
    },
    {
      label: 'Select schedule time',
      type: 'time',
    },
  ];

  const [scheduleData, setScheduleData] = useState({
    date: null,
    time: null,
  });
  

  const [openType, setOpenType] = useState('');
  console.log(scheduleData);
  const renderItem = ({item}: any) => (
    <>
      <View>
        <Pressable
          onPress={() => {
            setOpenType(item?.type);
          }}>
          <Text style={styles.label}>{item?.label}</Text>
          <Text style={styles.cards}>
            {item?.type === 'date' && scheduleData?.date
              ? moment(scheduleData?.date).format('DD/MM/YYYY')
              : item?.type === 'time' && scheduleData?.time
              ? moment(scheduleData?.time).format('hh:mm A')
              : item?.label}
          </Text>
        </Pressable>
      </View>
      <DatePicker
        modal
        open={openType === item?.type}
        mode={item?.type}
        date={
          item?.type === 'date' && scheduleData?.date
            ? scheduleData?.date
            : item?.type === 'time' && scheduleData?.time
            ? scheduleData?.time
            : new Date()
        }
        onConfirm={date => {
          setOpenType('');
          setScheduleData({...scheduleData, [item?.type]: date});
        }}
        onCancel={() => {
          setOpenType('');
        }}
      />
    </>
  );

  return (
    <ImageBackground
      source={require('../assets/images/scheduleBackground.jpg')}
      style={Styles.container}
      blurRadius={4}
      >
    
      <IntroScreen
        navigation={navigation}
        targetText1={'Schedule Your'}
        targetText2={'Date&Time'}
        slogan={`Schedule your start date and time, So that we can notify you on time`}>
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
                title={`Let's Start`}
                onPress={() => console.log('submit')}
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

export default ScheduleForm;

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
    borderWidth: 0.2,
    borderColor: Colors.white,
    paddingVertical: 16,
    paddingLeft: 16,
    borderRadius: 4,
    marginBottom: 16,
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
