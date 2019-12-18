import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';

const mainColor = '#0477BF';

export default function MyAgenda(props) {
  return (
    <CalendarList
      style={Styles.calendar}
      current={Date()}
      minDate={'2019-01-01'}
      maxDate={Date.now() - 24 * 3600 * 1000}
      monthFormat={'MMMM yyyy'}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: mainColor,
        selectedDayTextColor: '#ffffff',
        todayTextColor: mainColor,
        // dayTextColor: mainColor,
        textDisabledColor: '#d9e1e8',
        dotColor: mainColor,
        selectedDotColor: '#ffffff',
        arrowColor: '#b6c1cd',
        monthTextColor: '#b6c1cd',
        indicatorColor: 'mainColor',
        textDayFontFamily: 'HelveticaNeue-Bold',
        textMonthFontFamily: 'HelveticaNeue-Bold',
        textMonthFontWeight: '400',
        textDayHeaderFontFamily: 'HelveticaNeue-Light',
      }}
      markingType={'multi-period'}
      markedDates={MARKET_DATES}
      hideArrows={false}
      hideExtraDays={true}
      horizontal={true}
      pagingEnabled={true}
      // onVisibleMonthsChange={(months) => { console.warn('now these months are visible', months); }}
      onDayPress={(day) => props.onDayChange(day.dateString)}
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