import React, { useState, useEffect } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Habits from '../constants/Habits';

export default function DailyList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(Habits);
  });

  return (
    <FlatList
      scrollEnabled={false}
      data={tasks}
      keyExtractor={item => item.title}
      renderItem={({ item, index, separators }) => (
        <TouchableOpacity
          style={Styles.item}
          activeOpacity={0.5}
          onPress={() => {
            // const updatedItemIndex = tasks.findIndex(task => task.id === updatedItem.id);
            item.checked = !item.checked;
            setTasks();
          }} >
          <View style={[Styles.dot, {
            backgroundColor: item.checked
              ? item.color : 'white', borderColor: item.color
          }]} />
          <View style={Styles.flexRow}>
            <Text style={Styles.text}>{item.title}</Text>
            <Text style={Styles.rightText}>{item.weeklyRep}/7</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

const Styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
    backgroundColor: '#fefefe'
  },
  dot: {
    backgroundColor: 'grey',
    borderWidth: 2,
    width: 16,
    height: 16,
    borderRadius: 16,
    marginLeft: 16,
  },
  flexRow: {
    marginRight: 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  text: {
    margin: 14,
    color: '#333',
  },
  rightText: {
    fontFamily: 'space-mono',
    margin: 12,
    color: '#aaa',
  },
});
