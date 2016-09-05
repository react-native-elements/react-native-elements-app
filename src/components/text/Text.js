/**
 * @providesModule HSText
 */

import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

let styles = {}

const TextElement = ({style, children}) => (
  <Text style={[styles.text, style && style]}>{children}</Text>
)

styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: 'Lato'
      },
      android: {
        fontFamily: 'Roboto'
      }
    })
  }
})

export default TextElement
