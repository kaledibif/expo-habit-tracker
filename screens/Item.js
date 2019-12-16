import React, { useState } from 'react';
import {
  Text,
  FlatList,
  View,
  TextInput,
  SegmentedControlIOS,
  DatePickerIOS,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ItemStyles from '../styles/ItemStyles';

export default function Item() {
  let today = new Date();

  const [name, onNameChange] = useState(null);
  const [pickDate, setPickDate] = useState(false);
  const [duration, setDuration] = useState(7);
  const [startDate, setStartDate] = useState(today);

  return (
    <ScrollView style={ItemStyles.container}>
      <View style={ItemStyles.form}>
        <TextInput
          style={ItemStyles.textInput}
          onChangeText={name => onNameChange(name)}
          value={name}
          placeholder={'Habit Name'}
        />
        <View style={ItemStyles.dateContainer}>
          <View style={ItemStyles.startDateContainer}>
            <Text style={ItemStyles.colorText}>Start Date</Text>
            <TouchableOpacity onPress={() => { setPickDate(!pickDate) }}>
              <Text style={ItemStyles.dateText}>{!pickDate
                ? startDate.toDateString() == today.toDateString()
                  ? 'Today' : startDate.toDateString() : 'Set Selected Date'}</Text>
            </TouchableOpacity>
          </View>
          <View style={ItemStyles.startDateContainer}>
            <Text style={ItemStyles.colorText}>Duration</Text>
            <TouchableOpacity onPress={() => { setDuration(duration === 28 ? 7 : duration + 7) }}>
              <Text style={ItemStyles.dateText}>{duration} Days</Text>
            </TouchableOpacity>
          </View>
        </View>
        {pickDate ? <View style={ItemStyles.datePickerContainer}>
          <DatePickerIOS
            date={startDate}
            mode="date"
            onDateChange={(date) => {
              // let myDate = new Date(date);
              setStartDate(date);
            }}
          />
        </View> : null}
        <View style={ItemStyles.segmentContainer}>
          <Text style={ItemStyles.colorText}>Repetition</Text>
          <SegmentedControlIOS
            style={ItemStyles.segment}
            values={['Week Days', 'Weekend', 'All Week']}
            selectedIndex={0}
            onChange={(event) => {
              // this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
            }}
          />
        </View>
        <View style={ItemStyles.colorContainer}>
          <Text style={ItemStyles.colorText}>Color</Text>
          <FlatList
            style={ItemStyles.flatList}
            horizontal
            data={COLORS}
            renderItem={({ item }) => <Color item={item} />}
            keyExtractor={item => item.color}
          />
        </View>
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

Item.navigationOptions = {
  // title: 'December',
};

function Color({ item }) {
  let [color, setColor] = useState(null);

  return (
    <View style={ItemStyles.item}>
      <TouchableOpacity style={[ItemStyles.dot,
      { backgroundColor: item.checked ? item.color : 'white', borderColor: item.color }]}
        onPress={() => {
          if (color = item.color) {
            item.checked = !item.checked
            setColor(item.color);
          }
        }} />
    </View>
  );
}

const COLORS = [
  {
    color: '#0477BF',
    checked: false,
  },
  {
    color: '#0396A6',
    checked: false,
  },
  {
    color: '#04BF55',
    checked: false,
  },
  {
    color: '#F2B705',
    checked: false,
  },
  {
    color: '#F24405',
    checked: false,
  },
];