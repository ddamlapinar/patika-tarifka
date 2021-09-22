import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 30,
    marginHorizontal: 15,
    padding: 15,
  },
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 4,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
  },
});
