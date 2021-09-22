import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.5,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    backgroundColor: '#000000c0',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 15,
  },
});
