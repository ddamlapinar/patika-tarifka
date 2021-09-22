import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import MealCard from '../../components/MealCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
function Meals({navigation, route}) {
  const {strCategory} = route.params;
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c';
  const {loading, error, data} = useFetch(`${url}=${strCategory}`);

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
    <View>

      <FlatList
        data={data.meals}
        renderItem={renderMealCard}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
}
export default Meals;
