import React, { useState } from 'react';
import { ActionSheetIOS, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DailyHeader(props) {
  return (
    <View style={Styles.titleContainer}>
      <Text style={Styles.title}>{props.selectedDay ? new Date(props.selectedDay).toDateString() : "Today's Stack"}</Text>
      <TouchableOpacity
        style={Styles.dotsTouchable}
        onPress={() => {
          ActionSheetIOS.showActionSheetWithOptions(
            {
              options: ['Cancel', 'All Habits', 'Add New Habit',],
              // destructiveButtonIndex: 0,
              cancelButtonIndex: 0,
            },
            (buttonIndex) => {
              if (buttonIndex === 2) {
                props.navigation.navigate('Item')
              } else if (buttonIndex === 1) {
                Alert.alert('Opps', 'Not Available!');
              }
            },
          );
        }}>
        <Ionicons
          name="ios-more"
          size={26}
          style={{ marginRight: 18 }}
          color="grey"
        />
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
  title: {
    fontWeight: '400',
    fontSize: 16,
    margin: 12,
    margin: 16,
    marginLeft: 16,
    color: '#222'
  },
  dotsTouchable: {
    paddingVertical: 8,
    paddingLeft: 24,
  }
});
