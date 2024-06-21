import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Search from '../../screens/Investor/Investor';
import SettingsScreen from '../../screens/Profile/Profile';
import Myorders from '../../screens/Profile/Myorders';
import Shippingaddresses from '../../screens/Profile/Shippingaddresses';
import SettingsProfile from '../../screens/Profile/SettingsProfile';

const Stack = createStackNavigator();

const SettingStack = () => {
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
        name="SettingsScreen"
        component={SettingsScreen}
        options={{title: 'SettingsScreen'}}
      />
      <Stack.Screen name="Myorders" component={Myorders} />
      <Stack.Screen name="Shippingaddresses" component={Shippingaddresses} />
      <Stack.Screen name="SettingsProfile" component={SettingsProfile} />
    </Stack.Navigator>
  );
};
export default SettingStack;
