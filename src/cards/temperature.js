import React from 'react'
import { View } from 'react-native'
import Card from '.'
import TermoIcon from '../assets/thermometer.svg'
import { useTheme } from '../context/theme'
import { heightScale, spacing, widthScale } from '../utils/size'

const TemperatureCard = () => {
  const theme = useTheme()
  return (
    <Card icon={TermoIcon} title="Temperature">
      <View style={{ alignItems: 'center', position: 'relative' }}>
        <View
          style={{
            position: 'absolute',
            bottom: 4,
            width: widthScale(10) - 8,
            height: widthScale(10) - 8,
            borderRadius: widthScale(5),
            backgroundColor: theme.colors.primary,
            zIndex: 3,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: widthScale(5) + spacing,
            width: widthScale(5) - 8,
            height: heightScale(10),
            marginBottom: -widthScale(2.5),
            borderRadius: 10,
            backgroundColor: theme.colors.primary,
            zIndex: 3,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 1,
            width: widthScale(5) - 2,
            height: heightScale(25) + 2,
            marginBottom: -widthScale(2.5),
            borderRadius: 10,
            backgroundColor: theme.colors.surface,
            zIndex: 2,
          }}
        />
        <View
          style={{
            width: widthScale(5),
            height: heightScale(25),
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: -widthScale(2.5),
            borderRadius: 10,
          }}
        />
        <View
          style={{
            width: widthScale(10),
            height: widthScale(10),
            borderRadius: widthScale(5),
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
      </View>
    </Card>
  )
}

export default TemperatureCard
