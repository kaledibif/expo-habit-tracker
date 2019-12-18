import React, { useState } from 'react';
import { View } from 'react-native';

// Components
import MyAgenda from '../components/MyAgenda';
import DailyHeader from '../components/DailyHeader';
import DailyList from '../components/DailyList';

// Styles
import HomeStyles from '../styles/HomeStyles';

export default function Home({ navigation }) {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <View style={HomeStyles.container}>
      <MyAgenda
        selectedDay={selectedDay}
        onDayChange={(day) => setSelectedDay(day)} />

      <DailyHeader
        selectedDay={selectedDay}
        navigation={navigation} />

      <DailyList selectedDay={selectedDay} />
    </View>
  );
}





