import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// Styles
import ItemStyles from '../styles/ItemStyles';

// Components
import PeriodPicker from '../components/PeriodPicker';
import SegmentPicker from '../components/SegmentPicker';
import ColorPicker from '../components/ColorPicker';

export default function Item() {
  const [name, onNameChange] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [duration, setDuration] = useState(7);
  const [repetition, setRepetition] = useState(0);
  const [color, setColor] = useState('#0477BF');

  return (
    <ScrollView style={ItemStyles.container}>
      <View style={ItemStyles.form}>
        <TextInput
          style={ItemStyles.textInput}
          onChangeText={name => onNameChange(name)}
          value={name}
          placeholder={'Habit Name'}
        />
        <PeriodPicker
          startDate={startDate}
          updateStartDate={(val) => setStartDate(val)}
          duration={duration}
          updateDuration={(val) => setDuration(val)} />
        <SegmentPicker
          repetition={repetition}
          updateRepetition={(val) => setRepetition(val)} />
        <ColorPicker
          color={color}
          updateColor={(val) => setColor(val)} />
        <TouchableOpacity
          style={ItemStyles.button}
          // onPress={() => navigate('HomeScreen')}
          underlayColor='#fff'>
          <Text style={ItemStyles.buttonText}>Save Habit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
