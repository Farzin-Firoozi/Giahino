import React from 'react'

import { View } from 'react-native'
import { spacing } from './size'

const Divider = ({ horizontal = true, vertical = true, size = spacing }) => {
  return (
    <View
      style={{
        width: horizontal ? size : 0,
        height: vertical ? size : 0,
      }}
    />
  )
}

export default Divider
