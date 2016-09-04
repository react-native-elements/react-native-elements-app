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
    resizeMode: 'center',
    marginTop: -15
  }
})

export default NavTitleIcon
