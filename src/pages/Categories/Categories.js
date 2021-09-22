import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Categories.style';
import useFetch from '../../hooks/useFetch';
import config from '../../../config.js';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoryCard from '../../components/CategoryCard';
function Categories({navigation}) {
  console.log(config.API_URL_CATEGORIES);
  const {loading, error, data} = useFetch(config.API_URL_CATEGORIES);
  const handleSelectCategory = strCategory => {
    navigation.navigate('MealsScreen', {strCategory});
  };
  const renderCategoryCard = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleSelectCategory(item.strCategory)}
    />
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
        data={data.categories}
        renderItem={renderCategoryCard}
        numColumns={2}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
}
export default Categories;
