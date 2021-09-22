import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import config from '../../../config.js';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';
import styles from './Detail.style';
function Detail({route}) {
  const {idMeal} = route.params;
  // const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i';
  const {loading, error, data} = useFetch(`${config.API_URL_DETAIL}=${idMeal}`);
  console.log(`${config.API_URL_DETAIL}=${idMeal}`);

  const renderDetailCard = ({item}) => <DetailCard detail={item} />;
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
        renderItem={renderDetailCard}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
}
export default Detail;
