/**
 * @providesModule HSFormLabel
 */

import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import colors from 'HSColors'
import fonts from 'HSFonts'
import Text from 'HSText'

let styles = {}

const FormLabel = ({containerStyle, inputStyle, onChangeText, children}) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <Text style={styles.label}>{children.toUpperCase()}</Text>
  </View>
)

styles = StyleSheet.create({
  container: {},
  label: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 1,
    color: colors.grey2,
    fontSize: 13,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.bold
      },
      android: {
        fontFamily: fonts.android.bold
      }
    })
  }
})

export default FormLabel
