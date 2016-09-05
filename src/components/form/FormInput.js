/**
 * @providesModule HSFormInput
 */

import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import colors from 'HSColors'

let styles = {}

const FormInput = ({containerStyle, inputStyle, onChangeText, value}) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <TextInput
      selectionColor={colors.grey3}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, inputStyle && inputStyle]} />
  </View>
)

styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    height: 40,
    color: colors.grey3
  }
})

export default FormInput
