import React, { useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import Colors from '../constants/Colors';

export default function MyAgenda({ navigation, onDayChange }) {
  useEffect(() => {
    onDayChange(Date());
  }, [navigation.state.params]);

  return (
    <CalendarList
      style={Styles.calendar}
      current={Date()}
      minDate={'2019-01-01'}
      maxDate={Date.now() - 24 * 3600 * 1000}
      monthFormat={'MMMM yyyy'}
      markingType={'multi-period'}
      markedDates={MARKET_DATES}
      hideArrows={false}
      hideExtraDays={true}
      horizontal={true}
      pagingEnabled={true}
      onDayPress={(day) => {
        console.warn(day);
        onDayChange(day.dateString)
      }}
      // onVisibleMonthsChange={(months) => { console.warn('now these months are visible', months); }}
      theme={{
        selectedDayBackgroundColor: Colors.mainColor,
        todayTextColor: Colors.mainColor,
        dotColor: Colors.mainColor,
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        selectedDayTextColor: '#ffffff',
        selectedDotColor: '#ffffff',
        textDisabledColor: '#b6c1cd',
        textSectionTitleColor: '#b6c1cd',
        arrowColor: '#b6c1cd',
        monthTextColor: '#b6c1cd',
        textDayFontFamily: 'HelveticaNeue-Bold',
        textMonthFontFamily: 'HelveticaNeue-Bold',
        textDayHeaderFontFamily: 'HelveticaNeue-Light',
        textMonthFontWeight: '400',
        // indicatorColor: Colors.mainColor,
        // dayTextColor: Colors.mainColor,
      }}
    />
  )
}

const MARKET_DATES = {
  '2019-12-09': {
    periods: [
      { startingDay: true, endingDay: false, color: '#0477BF' },
      { startingDay: true, endingDay: false, color: '#04BF55' },
    ]
  },
  '2019-12-10': {
    periods: [
      { startingDay: false, endingDay: true, color: '#0477BF' },
      { startingDay: false, endingDay: false, color: '#04BF55' },
      { startingDay: true, endingDay: false, color: '#F24405' },
    ]
  },
  '2019-12-11': {
    periods: [
      { color: 'transparent' },
      { startingDay: false, endingDay: true, color: '#04BF55' },
      { startingDay: false, endingDay: true, color: '#F24405' },
    ]
  },
  '2019-12-12': {
    periods: [
      { startingDay: true, endingDay: true, color: '#0477BF' },
    ]
  },
}

const Styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 330,
  },
});