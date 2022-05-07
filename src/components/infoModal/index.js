/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'

import React, { useMemo } from 'react'
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { useTheme } from '../../context/theme'
import { heightScale, spacing } from '../../utils/size'

const firstHeight = heightScale(15)

const InfoModal = React.forwardRef((props, ref) => {
  const theme = useTheme()
  // variables
  const snapPoints = useMemo(() => [firstHeight, '85%'], [])
  const backgroundColor = theme.colors.surface

  return (
    <BottomSheetModal
      ref={ref}
      backdropComponent={(prps) => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          {...prps}
        />
      )}
      snapPoints={snapPoints}
      onChange={props.onChange}
      backgroundStyle={{
        backgroundColor,
      }}
      handleIndicatorStyle={{
        backgroundColor: theme.colors.text,
      }}
    >
      <View style={styles.content}>
        <View style={{ height: firstHeight }}>
          <Text
            style={{
              color: theme.colors.primary,
              fontWeight: '700',
              fontSize: 28,
            }}
          >
            Giahino
          </Text>
          <Text
            style={{
              color: theme.colors.text,
              opacity: 0.7,
              lineHeight: 20,
            }}
          >
            Giahino is an application that helps you manage and take care of
            your plants with the power of IoT.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <View
            style={{
              backgroundColor: theme.colors.text,
              opacity: 0.5,
              height: 1,
              flex: 1,
            }}
          />
          <Text
            style={{
              color: theme.colors.text,
              padding: spacing,
            }}
          >
            Created by
          </Text>
          <View
            style={{
              backgroundColor: theme.colors.text,
              opacity: 0.5,
              height: 1,
              flex: 1,
            }}
          />
        </View>

        <Avatar
          name="Farzin Firoozi"
          img="https://media-exp1.licdn.com/dms/image/D4D03AQEdwquwEFQpCw/profile-displayphoto-shrink_100_100/0/1631637611739?e=1656547200&v=beta&t=NT-9w7CeWmXNR4L4F2XA9Hx0pY5JEgeyc372SqPAbLU"
        />
        <Avatar
          name="Hossein Shirejoni"
          img="https://media-exp1.licdn.com/dms/image/C5103AQH0Tnem5y18Yw/profile-displayphoto-shrink_100_100/0/1517603718160?e=1656547200&v=beta&t=HveMUF-UhidB6WkLHwhhy9eKJ2YsgxKUlvIHBYKv2VQ"
        />
        <Avatar
          name="Mohsen Akbari"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKOTEc_Mxras20gWxOgGWCLZk8cBGH3zF_A&usqp=CAU"
        />
      </View>
    </BottomSheetModal>
  )
})

export default InfoModal

const Avatar = ({ name, img }) => {
  const theme = useTheme()

  return (
    <View style={styles.avatar}>
      <Image source={{ uri: img }} style={styles.avatarImage} />
      <Text style={[styles.avatarName, { color: theme.colors.text }]}>
        {name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: spacing,
  },
  avatar: {
    flexDirection: 'row',
    marginBottom: spacing,
    alignItems: 'center',
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: spacing,
  },
  avatarName: {
    fontSize: 20,
  },
})
