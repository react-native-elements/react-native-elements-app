import React from 'react'
import { Platform, Navigator, StyleSheet } from 'react-native'
import NavTitleComponent from './NavTitleComponent'
import NavTitleIcon from './NavTitleIcon'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../config/colors'

let styles = {}

const NavigationBar = () => {
  const src = require('image!logo')
  const LeftButton = (route, navigator, index, navState) => {
    if (index > 0) {
      const leftAction = navigator.pop
      const leftIcon = 'chevron-left'
      return (
        <Icon
          onPress={leftAction}
          name={leftIcon} size={28} />
      )
    }
    return null
  }

  const RightButton = (/* route, navigator, index, navState */) => {
    return null
  }

  const Title = (route, navigator, index, navState) => {
    if (route.title) {
      return (
        <NavTitleComponent title={route.title} />
      )
    }
    return (
      <NavTitleIcon src={src} />
    )
  }

  return (
    <Navigator.NavigationBar
      routeMapper={{
        LeftButton,
        RightButton,
        Title
      }}
      style={styles.navBar}
    />
  )
}

styles = StyleSheet.create({
  navBar: {
    height: 65,
    backgroundColor: colors.dkGreyBg,
    ...Platform.select({
      android: {
        height: 55
      }
    })
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 10,
    ...Platform.select({
      android: {
        marginTop: 15
      }
    })
  }
})

export default NavigationBar
