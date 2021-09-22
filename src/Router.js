import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            title: 'CATEGORIES',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#ff8d58'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{
            title: 'MEALS',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#ff8d58'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{
            title: 'Detail',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#ff8d58'},
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
