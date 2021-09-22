import React from 'react';
import {Text, TouchableWithoutFeedback, View, Image} from 'react-native';
import styles from './CategoryCard.style';
function CategoryCard({category, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
        <Text style={styles.text}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default CategoryCard;
