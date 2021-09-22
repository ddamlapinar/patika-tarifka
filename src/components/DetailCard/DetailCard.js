import React from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import styles from './DetailCard.style';
function Detail({detail}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: detail.strMealThumb}} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}> {detail.strMeal}</Text>
        <Text style={styles.subTitle}> {detail.strCategory}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>{detail.strInstructions}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(detail.strYoutube)}>
          <Text style={styles.buttonText}>Watch Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Detail;
