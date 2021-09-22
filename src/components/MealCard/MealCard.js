import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

function MealCard({meal, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View>
        <Text>{meal.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default MealCard;
