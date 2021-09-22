import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

function CategoryCard({category, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View>
        <Text>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default CategoryCard;
