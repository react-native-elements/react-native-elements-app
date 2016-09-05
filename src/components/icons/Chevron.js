import React, { PropTypes } from 'react'
import { View } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Chevron = ({type, style, color}) => (
  <View style={[style && style]}>
    <Icon name={`chevron-${type}`} size={26} color={color || colors.silver} />
  </View>
)

Chevron.propTypes = {
  type: PropTypes.string,
  style: PropTypes.any,
  color: PropTypes.string
}

export default Chevron
