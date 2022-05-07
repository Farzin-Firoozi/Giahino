import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '../context/theme'
import { spacing } from '../utils/size'

const Card = (props) => {
  const { children, title, style } = props
  const theme = useTheme()

  return (
    <View
      style={{
        flex: 1,
        padding: spacing,
        backgroundColor:
          theme.mode === 'dark'
            ? theme.colors.generateBlack(0.04)
            : theme.colors.white,
        shadowColor: theme.colors.black,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.04,
        shadowRadius: 10,
        elevation: 4,
        borderRadius: 10,
        ...style,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: spacing,
        }}
      >
        <props.icon
          stroke={theme.colors.generateBlack(0.5)}
          width={24}
          height={24}
        />
        <Text
          style={{
            color: theme.colors.generateBlack(0.5),
            marginLeft: spacing / 2,
          }}
        >
          {title}
        </Text>
      </View>
      <>{children}</>
    </View>
  )
}

export default Card
