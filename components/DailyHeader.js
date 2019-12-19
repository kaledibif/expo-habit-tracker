import React, { useState } from 'react';
import {
  ActionSheetIOS,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DailyHeader(props) {
  return (
    <View style={Styles.titleContainer}>
      <Text style={Styles.title}>{getHeaderText(props.selectedDay)}</Text>
      <TouchableOpacity
        style={Styles.dotsTouchable}
        onPress={() => {
          ActionSheetIOS.showActionSheetWithOptions(
            {
              options: ['Cancel', 'Add New Habit',],
              // destructiveButtonIndex: 0,
              cancelButtonIndex: 0,
            },
            (buttonIndex) => {
              if (buttonIndex === 1) {
                props.navigation.navigate('Item')
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

function getHeaderText(selectedDay) {
  return new Date(selectedDay).toDateString() === new Date().toDateString()
    ? "Today's Stack" : new Date(selectedDay).toDateString();
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
