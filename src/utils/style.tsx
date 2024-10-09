import {StyleSheet} from 'react-native';
import Colors from './colorScheme';

const Styles = StyleSheet.create({
  statusBar: {
    backgroundColor: Colors?.black,
  },
  container: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  intoContainer:{
    
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'white',
  },
  largeText: {
    fontSize: 34,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight:45
  },
  smallText:{
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    fontWeight: '300',
    marginVertical: 20,
  },
  introCard: {
    backgroundColor: Colors?.grayOpacity,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '5%',
    width: '95%',
    padding: 20,
    borderRadius: 15,
  },
  primaryButton:{
    backgroundColor: Colors.primary,
    textAlign:'center',
    borderRadius: 8,
    padding: 20,
  },
  secondaryButton:{
    backgroundColor: Colors.white,
    textAlign:'center',
    borderRadius: 8,
    borderColor:Colors.primary,
    borderWidth: 1,
    padding: 20,
  },
  primaryButtonText:{
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Colors.black,
    textAlign:'center'
  },
  secondaryButtonText:{
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Colors.primary,
    textAlign:'center'
  },
  backIcon: {
    width: 30,
    height: 30,
  }
});

export default Styles;
