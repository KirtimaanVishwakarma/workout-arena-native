import React, {useState} from 'react';
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

const IntroTarget = ({navigation}: any) => {
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
  const [selectedCard, setSelectedCard] = useState('');

  const renderItem = ({item}: any) => (
    <View
      style={
        selectedCard === item?.title
          ? [styles.cards, styles.selectedCard]
          : styles.cards
      }
      onTouchEnd={() => setSelectedCard(item?.title)}>
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subTitle}>{item?.subTitle}</Text>
      </View>
      <Image source={item.icon} style={styles.icon} />
    </View>
  );

  return (
    <ImageBackground
      source={require('../assets/images/goalBackground.jpg')}
      style={Styles.container}
      blurRadius={4}
      >
      <IntroScreen
        navigation={navigation}
        targetText1={'What you goals'}
        targetText2={'Exercise'}
        slogan={`Let's define you goals and will help you to achieve it`}>
        <View style={styles.container}>
          <FlatList
            data={lists}
            renderItem={renderItem}
            keyExtractor={item => item.title}
          />
          <FormButton
            title={'Continue'}
            onPress={() => navigation.navigate('ConditionForm')}
            btnStyles={selectedCard || {backgroundColor: Colors.grayOpacity}}
            btnTextStyle={selectedCard || {color: Colors.white}}
          />
        </View>
      </IntroScreen>
    </ImageBackground>
  );
};

export default IntroTarget;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  selectedCard: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  btnSection: {position: 'relative', width: '100%', top: '100%'},
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
    borderColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginVertical: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: Colors.white,
    marginBottom: 4,
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 14,
    color: Colors.white,
  },
});
