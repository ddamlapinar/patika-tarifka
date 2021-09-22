import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
function Loading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: 250,
        height: 250,
        marginLeft: 50,
      }}>
      <LottieView
        source={require('../../assets/loadingAnimation.json')}
        autoPlay
        loop
      />
    </View>
  );
}
export default Loading;
