import React from 'react'
import { TouchableHighlight, StyleSheet, View } from 'react-native'
import Text from '../text/Text'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../config/colors'

let styles = {}

const Button = ({buttonStyle, title, onPress, icon, primary1, primary2, primary3, backgroundColor, color, fontSize, underlayColor}) => (
  <TouchableHighlight
    underlayColor={underlayColor || 'transparent'}
    onPress={onPress}>
    <View
      style={[
        styles.button,
        primary1 && {backgroundColor: colors.primary1},
        primary2 && {backgroundColor: colors.primary2},
        backgroundColor && {backgroundColor},
        buttonStyle && buttonStyle
      ]}
      >
      {
        icon && <Icon color={icon.color || 'white'} size={icon.size || 26} style={styles.icon} name={icon.name} />
      }
      <Text style={[styles.text, color && {color}, fontSize && {fontSize}]}>
        {title}
      </Text>
    </View>
  </TouchableHighlight>
)

styles = StyleSheet.create({
  button: {
    padding: 30,
    borderTopWidth: 1,
    borderColor: '#ededed',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  icon: {
    marginRight: 10
  }
})

export default Button
