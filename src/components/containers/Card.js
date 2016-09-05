/**
 * @providesModule HSCard
 */

import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import colors from 'HSColors'
let styles = {}

const Card = ({children, flexDirection, containerStyle, wrapperStyle}) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <View style={[styles.wrapper, wrapperStyle && wrapperStyle, flexDirection && {flexDirection}]}>
      {children}
    </View>
  </View>
)

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: colors.grey5,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 1,
        shadowRadius: 1
      },
      android: {
        elevation: 1
      }
    })
  },
  wrapper: {
    backgroundColor: 'transparent'
  }
})

export default Card
