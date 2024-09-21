import React from 'react';
import IntroScreen from '../components/introScreen';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../utils/colorScheme';
import FormButton from '../components/Button';

const IntroTarget = () => {
  const lists = [
    {
      title: 'Loss Weight',
      subTitle: 'Burn calories & Get ideal body',
      icon: require('../assets/images/fire.png'),
    },
    {
      title: 'Gain Muscle',
      subTitle: 'Build mass & muscle',
      icon: require('../assets/images/weights-lifting.png'),
    },
    {
      title: 'Get Fitter',
      subTitle: 'Feel more healthy',
      icon: require('../assets/images/yoga.png'),
    },
  ];
  const renderItem = ({item}: any) => (
    <View style={styles.cards}>
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subTitle}>{item?.subTitle}</Text>
      </View>
      <Image source={item.icon} style={styles.icon} />
    </View>
  );

  return (
    <IntroScreen
      targetText1={'What you goals'}
      targetText2={'Exercise'}
      slogan={`Let's define you goals and will help you to achieve it`}>
      <View style={styles.container}>
        <FlatList
          data={lists}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
        <View style={styles.btnSection}>
          <FormButton title={'Continue'} />
        </View>
      </View>
    </IntroScreen>
  );
};

export default IntroTarget;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '60%',
  },
  btnSection: {position: 'absolute', width: '100%', bottom: 0},
  icon: {
    height: 40,
    width: 40,
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.2,
    borderRadius: 6,
    borderColor: Colors.gray,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginVertical: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: Colors.black,
    marginBottom: 4,
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 14,
    color: Colors.black,
  },
});
