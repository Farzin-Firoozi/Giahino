import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { heightScale, spacing, widthScale } from '../utils/size'
import PlantIcon from '../assets/plant.svg'
import Header from '../components/header'
import { Text } from 'react-native-paper'

import { useTheme } from '../context/theme'
import Divider from '../utils/divider'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Card from '../cards'
import MoistureCard from '../cards/moisture'
import TemperatureCard from '../cards/temperature'
import GasCard from '../cards/gas'
import LightCard from '../cards/light'

const MainScreen = () => {
  const theme = useTheme()
  const backgroundColor = theme.colors.surface
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.main, { backgroundColor }]}>
      <Header />
      <ScrollView
        contentContainerStyle={{
          padding: spacing,
          paddingBottom: insets.bottom,
        }}
      >
        {/* <PlantIcon width="100%" height={heightScale(20)} /> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: spacing,
          }}
        >
          <TemperatureCard />
          <Divider />
          <View>
            <GasCard />
            <Divider />
            <LightCard />
          </View>
        </View>
        <Divider />
        <MoistureCard />
      </ScrollView>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
})
