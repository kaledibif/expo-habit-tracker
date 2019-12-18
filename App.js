import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, YellowBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import Layout from './constants/Layout';

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps has been renamed',
]);

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      // require('./assets/images/sample.png'),
    ]),
    Font.loadAsync({
      ...Ionicons.font,
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    maxWidth: Layout.width,
    maxHeight: Layout.maxHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
