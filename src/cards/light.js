import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import Card from '.'

import LightIcon from '../assets/zap.svg'
import SunIcon from '../assets/sun.svg'

import { spacing, widthScale } from '../utils/size'

const LightCard = () => {
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
      withTiming(720, {
        duration: 30000,
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
      icon={LightIcon}
      title="Light"
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
          <SunIcon width={widthScale(20)} height={widthScale(20)} />
        </Animated.View>
      </View>
    </Card>
  )
}

export default LightCard
