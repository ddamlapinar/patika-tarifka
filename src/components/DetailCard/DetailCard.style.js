import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.6,
    resizeMode: 'cover',
  },
  infoContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  bodyContainer: {
    padding: 10,
    textAlign: 'auto',
    marginBottom: 10,
  },
  instructionsText: {
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  subTitle: {
    fontSize: 20,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#c00',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
