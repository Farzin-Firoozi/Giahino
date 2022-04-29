import React from 'react';
import {
  StatusBar,
  useColorScheme,
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';
import MainScreen from './screens/main';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.wrapper}>
        <MainScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
