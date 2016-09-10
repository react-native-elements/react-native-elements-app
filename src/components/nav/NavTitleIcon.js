/**
 * @providesModule HSNavTitleIcon
 */

import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

let styles = {}

const NavTitleIcon = ({src}) => (
  <View>
    <Image
      source={src}
      style={styles.logo} />
  </View>
)

styles = StyleSheet.create({
  container: {
  },
  logo: {
    width: 160,
    height: 34
  }
})

export default NavTitleIcon
