import React from "react";
import { StyleSheet, View } from "react-native";
import { ButtonPrimary, iconsColor, transparent, white } from "../assets/colors";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../screens/Home/Home';
import CityExpert from '../screens/CityExpert/CityExpert';
import Saved from '../screens/Saved/Saved';
import Investor from '../screens/Investor/Investor';
import Profile from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

const MyTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route: { name } }) => ({
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarActiveTintColor: ButtonPrimary,
        tabBarInactiveTintColor: 'lightgray',
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          marginBottom: 5,
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 12, // Adjusted font size here
          color: 'grey'
        },
        tabBarIconStyle: {
          width: 25,
          height: 25,
          marginTop: 0,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: true,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          // unmountOnBlur: true,
          tabBarIcon: ({ color, focused }) => (
            <Ionicon name={focused ? "home" : "home-outline"} size={25} color={focused ? iconsColor : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="CityExpert"
        component={CityExpert}
        options={{
          tabBarLabel: "City Expert",
          tabBarIcon: ({ color, focused }) => (
            <Ionicon name={focused ? "people" : "people-outline"} size={25} color={focused ? iconsColor : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: "Saved",
          // unmountOnBlur: true,
          tabBarIcon: ({ color, focused }) => (
            <Ionicon name={focused ? "heart" : "heart-outline"} size={25} color={focused ? iconsColor : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Investor"
        component={Investor}
        options={{
          tabBarLabel: "Investor",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name={focused ? "suitcase" : "suitcase"} size={25} color={focused ? iconsColor : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.profileIconContainer, { borderColor: focused ? iconsColor : 'black' }]}>
              <Ionicon name={focused ? "person" : "person-outline"} size={20} color={focused ? iconsColor : 'black'} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: white,
    height: Platform.OS === 'ios' ? '11%' : '10%',
    justifyContent: 'center',
    paddingBottom: Platform.OS === 'ios' ? 15 : 0,
    borderTopColor: transparent,
    elevation: 0,
    shadowOpacity: 0,
  },
  profileIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
});
