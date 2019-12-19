import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  DatePickerIOS,
  TouchableOpacity,
} from 'react-native';
import Layout from '../constants/Layout';

export default function PeriodPicker({ startDate, updateStartDate, duration, updateDuration }) {
  let today = new Date();
  const [pickDate, setPickDate] = useState(false);

  return (
    <View>
      <View style={Styles.dateContainer}>
        <View style={Styles.startDateContainer}>
          <Text style={Styles.greyText}>Start Date</Text>
          <TouchableOpacity onPress={() => { setPickDate(!pickDate) }}>
            <Text style={Styles.dateText}>{!pickDate
              ? startDate.toDateString() == today.toDateString()
                ? 'Today' : startDate.toDateString() : 'Set Selected Date'}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.startDateContainer}>
          <Text style={Styles.greyText}>Duration</Text>
          <TouchableOpacity onPress={() => {
            updateDuration(duration === 28 ? 7 : duration + 7)
          }}>
            <Text style={Styles.dateText}>{duration} Days</Text>
          </TouchableOpacity>
        </View>
      </View>
      {pickDate ? <View style={Styles.datePickerContainer}>
        <DatePickerIOS
          date={startDate}
          mode="date"
          onDateChange={(date) => {
            // let myDate = new Date(date);
            updateStartDate(date);
          }}
        />
      </View> : null}
    </View>
  )
}

const Styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  dateText: {
    fontSize: 16,
    marginTop: 12,
  },
  startDateContainer: {
    width: Layout.width / 2 - 24,
    justifyContent: 'flex-start',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  greyText: {
    marginRight: 24,
    color: '#bbb',
  },
});
