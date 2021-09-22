import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './MealCard.style';
function MealCard({meal, onSelect}) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <ImageBackground style={styles.image} source={{uri: meal.strMealThumb}}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{meal.strMeal}</Text>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}
export default MealCard;
