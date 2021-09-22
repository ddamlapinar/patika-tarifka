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
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  bodyContainer: {
    paddingHorizontal: 10,
    textAlign: 'auto',
    marginVertical: 10,
  },
  instructionsText: {
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color:'#c00'
  },
  subTitle: {
    fontSize: 16,
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
