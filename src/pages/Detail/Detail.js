import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
function Detail({route}) {
  const {idMeal} = route.params;
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i';
  const {loading, error, data} = useFetch(`${url}=${idMeal}`);
  console.log(`${url}=${idMeal}`);


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
        renderItem={({item}) => <Text>{item.strInstructions}</Text>}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
}
export default Detail;
