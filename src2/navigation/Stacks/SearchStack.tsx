import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Search from '../../screens/Investor/Investor';

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#101010',
        },
        animationEnabled: false,
        gestureEnabled: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#ffd700',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{title: 'Search'}}
      />
    </Stack.Navigator>
  );
};
export default SearchStack;
