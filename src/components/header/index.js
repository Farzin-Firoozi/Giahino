import React, { useRef } from 'react'

import LogoIcon from '../../assets/logo.svg'
import InfoModal from '../../components/infoModal'

import InfoIcon from '../../assets/info.svg'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { spacing } from '../../utils/size'

const Header = () => {
  const bottomSheetRef = useRef(null)
  const openInfoModal = () => {
    bottomSheetRef.current.present()
  }

  return (
    <>
      <View style={styles.header}>
        <View style={styles.logo}>
          <LogoIcon width="100%" height="100%" />
        </View>
        <TouchableOpacity style={styles.infoButton} onPress={openInfoModal}>
          <InfoIcon width="24" height="24" />
        </TouchableOpacity>
      </View>

      <InfoModal ref={bottomSheetRef} onChange={(e) => console.log(e)} />
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    backgroundColor: '#8EB63B',
    alignItems: 'center',
  },
  logo: {
    borderRadius: 9999,
    width: 48,
    height: 48,
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  infoButton: {
    padding: spacing,
  },
})
