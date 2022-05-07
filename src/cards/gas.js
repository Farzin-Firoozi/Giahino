import React, { useEffect } from 'react'

import Animated, {
  cancelAnimation,
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import Card from '.'
import AlertIcon from '../assets/alert.svg'
import { spacing, widthScale } from '../utils/size'

import FanIcon from '../assets/fan.svg'
import { Text, View } from 'react-native'
import { useTheme } from '../context/theme'

const GasCard = () => {
  const theme = useTheme()
  const animation = useSharedValue(0)

  const rotation = useDerivedValue(() => {
    return interpolate(animation.value, [0, 360], [0, 360])
  })

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: rotation.value + 'deg',
        },
      ],
    }
  })

  const startAnimation = () => {
    animation.value = withRepeat(
      withTiming(7200, {
        duration: 20000,
        easing: Easing.linear,
      }),
      -1
    )
  }

  useEffect(() => {
    startAnimation()
  }, [])

  return (
    <Card
      icon={AlertIcon}
      title="CO Gas"
      style={{
        width: widthScale(50) - spacing * 2,
        height: widthScale(50) - spacing * 2,
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Animated.View
          style={[
            animationStyle,
            {
              width: widthScale(20),
              height: widthScale(20),
            },
          ]}
        >
          <FanIcon
            width={widthScale(20)}
            height={widthScale(20)}
            fill={theme.colors.generateBlack(0.6)}
          />
        </Animated.View>
      </View>
    </Card>
  )
}

export default GasCard
