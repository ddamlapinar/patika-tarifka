import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import config from '../../../config.js';
import MealCard from '../../components/MealCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Meals.style';
function Meals({navigation, route}) {
  const {strCategory} = route.params;
  // const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c';
  const {loading, error, data} = useFetch(
    `${config.API_URL_MEALS}=${strCategory}`,
  );

  const handleSelectMeal = idMeal => {
    navigation.navigate('DetailScreen', {idMeal});
  };

  const renderMealCard = ({item}) => (
    <MealCard meal={item} onSelect={() => handleSelectMeal(item.idMeal)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderMealCard}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
}
export default Meals;
