import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Importing the screens
import Home from '../screens/Home';
import Item from '../screens/Item';

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: '/',
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#0477BF',
        },
        headerLeft: () => (
          <Text style={Styles.leftTitle}>Habit Agenda</Text>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => { navigation.setParams({ setToday: true }) }}>
            <Ionicons
              name="ios-calendar"
              size={26}
              style={Styles.rightTouchable}
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
  },
  {
    // initialRouteName: 'Item',
  }
);

const Styles = StyleSheet.create({
  leftTitle: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 16,
  },
  rightTouchable: {
    marginRight: 18,
  },
});

export default createAppContainer(StackNavigator);
