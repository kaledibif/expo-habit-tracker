import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DailyList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(HABITS);
  });

  return (
    <FlatList
      scrollEnabled={false}
      data={tasks}
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

let HABITS = [
  {
    id: 1,
    title: 'First Item',
    color: '#0477BF',
    checked: false,
    weeklyRep: 4,
    totalRep: 12,
  },
  {
    id: 2,
    title: 'Second Item',
    color: '#04BF55',
    checked: true,
    weeklyRep: 0,
    totalRep: 4,
  },
  {
    id: 3,
    title: 'Third Item',
    color: '#F24405',
    checked: false,
    weeklyRep: 2,
    totalRep: 3,
  },
];