import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DailyList(props) {
  const [tasks, setTasks] = useState(HABITS);

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={item => item.title}
    />
  )
}

function Item({ item }) {
  return (
    <TouchableOpacity
      style={Styles.item}
      activeOpacity={0.5}
      onPress={() => {
        item.checked = !item.checked;
      }} >
      <View style={[Styles.dot, { backgroundColor: item.checked ? item.color : 'white', borderColor: item.color }]} />
      <View style={Styles.flexRow}>
        <Text style={Styles.text}>{item.title}</Text>
        <Text style={Styles.rightText}>{item.weeklyRep}/7</Text>
      </View>
    </TouchableOpacity>
  );
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

const HABITS = [
  {
    title: 'First Item',
    color: '#0477BF',
    checked: false,
    weeklyRep: 4,
    totalRep: 12,
  },
  {
    title: 'Second Item',
    color: '#04BF55',
    checked: true,
    weeklyRep: 0,
    totalRep: 4,
  },
  {
    title: 'Third Item',
    color: '#F24405',
    checked: false,
    weeklyRep: 2,
    totalRep: 3,
  },
];