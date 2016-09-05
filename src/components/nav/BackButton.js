/**
 * @providesModule HSBackButton
 */

import React from 'react'
import { TouchableHighlight } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const BackButton = ({onPress, name, size}) => (
  <TouchableHighlight onPress={onPress}>
    <Icon name={name} size={size || 28} />
  </TouchableHighlight>
)

export default BackButton
