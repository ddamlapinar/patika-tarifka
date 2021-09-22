import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

function Error() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: 400,
        height: 400,
        justifyContent: 'center',
      }}>
      <LottieView
        source={require('../../assets/errorAnimation.json')}
        autoPlay
        loop
      />
    </View>
  );
}
export default Error;
