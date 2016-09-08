/**
 * @providesModule HSNavTitleIcon
 */

import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

let styles = {}

const NavTitleIcon = () => (
  <View style={styles.iconContainer}>
    <Image
      source={require('../../images/logo.png')}
      style={styles.logo} />
  </View>
)

styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    width: width - 140,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 136,
    height: 28,
    resizeMode: 'contain'
  }
})

export default NavTitleIcon
