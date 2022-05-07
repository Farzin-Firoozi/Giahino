/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react'
import { useColorScheme } from 'react-native'

const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
  const mode = useColorScheme()
  const isDarkMode = mode === 'dark'

  const generateBlack = (alpha = 1) => {
    return `rgba(0,0,0,${alpha})`
  }

  const generateWhite = (alpha = 1) => {
    return `rgba(255,255,255,${alpha})`
  }

  const generatePrimary = (alpha = 1) => {
    return `rgba(142, 182, 59,${alpha})`
  }

  const colors = {
    primary: '#8EB63B',
    surface: isDarkMode ? '#23272f' : '#F7F7F7',
    text: isDarkMode ? '#F7F7F7' : '#23272f',
    black: '#000',
    white: '#fff',
    blue: '#00BFFF',
    generateBlack: isDarkMode ? generateWhite : generateBlack,
    generateWhite: isDarkMode ? generateBlack : generateWhite,
    generatePrimary,
    transparent: 'rgba(0,0,0,0)',
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const applyAlpha = (color, opacity) => {
  // coerce values so ti is between 0 and 1.
  var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
  return color + _opacity.toString(16).toUpperCase()
}
