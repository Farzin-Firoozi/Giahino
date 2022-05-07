import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import MainScreen from './src/screens/main'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import ThemeProvider, { useTheme } from './src/context/theme'

const CustomStatusBar = () => {
  const insets = useSafeAreaInsets()
  const theme = useTheme()
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        height: insets.top,
      }}
    >
      <StatusBar barStyle={'light-content'} />
    </View>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <CustomStatusBar />
        <BottomSheetModalProvider>
          <View style={styles.wrapper}>
            <MainScreen />
          </View>
        </BottomSheetModalProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})
