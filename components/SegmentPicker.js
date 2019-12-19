import React from 'react';
import {
  SegmentedControlIOS,
  View,
  Text,
  StyleSheet
} from 'react-native';
import Colors from '../constants/Colors';

export default function SegmentPicker({ repetition, updateRepetition }) {
  return (
    <View style={Styles.segmentContainer}>
      <Text style={Styles.greyText}>Repetition</Text>
      <SegmentedControlIOS
        style={Styles.segment}
        tintColor={Colors.mainColor}
        values={SEGMENT_VALUES}
        selectedIndex={repetition}
        onChange={(event) => {
          updateRepetition(event.nativeEvent.selectedSegmentIndex)
        }}
      />
    </View>
  )
}

const SEGMENT_VALUES = [
  'Week Days',
  'Weekend',
  'All Week'
];

const Styles = StyleSheet.create({
  segmentContainer: {
    marginVertical: 16,
  },
  segment: {
    marginTop: 12,
  },
  greyText: {
    marginRight: 24,
    color: '#bbb',
  },
});
