/**
 * @providesModule HSNavTitleIcon
 */

import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

let styles = {}

const NavTitleIcon = () => (
  <View style={styles.iconContainer}>
    <Image
      source={require('image!logo')}
      style={styles.logo} />
  </View>
)

styles = StyleSheet.create({
  iconContainer: {
  },
  logo: {
    marginTop: -15,
    resizeMode: 'center'
  }
})

export default NavTitleIcon
