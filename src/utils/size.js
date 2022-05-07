import { Dimensions } from 'react-native'

export const spacing = 16

export const widthScale = (value) => {
  return (Dimensions.get('window').width * value) / 100
}

export const heightScale = (value) => {
  return (Dimensions.get('window').height * value) / 100
}
