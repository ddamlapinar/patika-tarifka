import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Categories.style';
import useFetch from '../../hooks/useFetch';
// import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoryCard from '../../components/CategoryCard';
function Categories({navigation}) {
  const {loading, error, data} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );
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
