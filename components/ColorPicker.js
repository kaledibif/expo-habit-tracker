import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function ColorPicker({ color, updateColor }) {
  return (
    <View style={Styles.colorContainer}>
      <Text style={Styles.colorText}>Color</Text>
      <FlatList
        style={Styles.flatList}
        horizontal
        data={COLORS}
        renderItem={({ item }) => <View style={Styles.item}>
          <TouchableOpacity style={[Styles.dot,
          { backgroundColor: item === color ? color : 'white', borderColor: item }]}
            onPress={() => {
              updateColor(item);
            }} />
        </View>}
        keyExtractor={item => item}
      />
    </View>
  )
}

const COLORS = [
  '#0477BF',
  '#0396A6',
  '#04BF55',
  '#F2B705',
  '#F24405',
];

const Styles = StyleSheet.create({
  colorContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flatList: {
    marginVertical: 16,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dot: {
    borderWidth: 4,
    width: 24,
    height: 24,
    marginRight: 12,
    borderRadius: 24,
  },
  colorText: {
    marginRight: 24,
    color: '#bbb',
  },
});
