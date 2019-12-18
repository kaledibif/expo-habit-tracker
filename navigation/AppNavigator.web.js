import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createBrowserApp } from '@react-navigation/web';
// import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Item from '../screens/Item';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: '/',
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: '#0477BF',
        },
        headerLeft: () => (
          <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold', marginLeft: 16, }}>Agenda</Text>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons
              name="ios-calendar"
              size={26}
              style={{ marginRight: 18 }}
              color="white"
            />
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerBackTitle: 'Agenda',
      }),
    },
    Item: {
      screen: Item,
      path: '/',
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: '#0477BF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }),
    },
  }
);

createStackNavigator.path = '';

export default createBrowserApp(Navigator, { history: 'hash' });
