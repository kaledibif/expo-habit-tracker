import React, { useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import Colors from '../constants/Colors';
import MarkedDates from '../constants/MarkedDates';

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
      markedDates={MarkedDates}
      hideArrows={false}
      hideExtraDays={true}
      horizontal={true}
      pagingEnabled={true}
      onDayPress={(day) => {
        onDayChange(day.dateString)
      }}
      // onVisibleMonthsChange={(months) => { console.warn('now these months are visible', months); }}
      theme={{
        selectedDayBackgroundColor: Colors.main,
        todayTextColor: Colors.main,
        dotColor: Colors.main,
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

function getMarketDays() {
  return AgendaController.getMonthlyData();
}

const Styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    // height: 330,
  },
});