import React, { PropTypes } from 'react'
import { View, Platform, TouchableHighlight, Text, StyleSheet } from 'react-native'
import Chevron from '../components/icons/Chevron'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

let styles = {}

const Item = ({item, navigate, borderStyle}) => {
  let Initials
  if (!item.icon && !item.noIcon) {
    let initials = item.title.split(' ')
    Initials = initials[0].substring(0, 1) + initials[1].substring(0, 1)
  }
  return (
    <TouchableHighlight
      underlayColor='white'
      onPress={() => navigate(item)} >
      <View style={styles.container}>
        <View style={{padding: 12, justifyContent: 'center', alignItems: 'center'}}>
          {item.icon && (
            <Icon
              style={styles.leftIcon}
              name={item.icon}
              size={24}
              color={colors.silver} />
            )
          }
          {!item.icon && !item.noIcon && (
            <View style={styles.initialsContainer}>
              <Text style={styles.initials}>{Initials.toUpperCase()}</Text>
            </View>
            )
          }
        </View>
        <View style={[styles.underlineContainer, borderStyle && borderStyle, item.noIcon && {marginLeft: 24}]}>
          <View>
            <Text style={[styles.title]}>{item.title}</Text>
            {
              item.subtitle &&
                <Text style={styles.subtittle}>{item.subtitle}</Text>
            }
          </View>
          <View style={styles.iconContainer}>
            <Chevron style={styles.rightIcon} type='right' />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

Item.PropTypes = {
  items: PropTypes.array
}

styles = StyleSheet.create({
  title: {
    padding: 12,
    paddingLeft: 0,
    fontSize: 15,
    marginTop: 4,
    ...Platform.select({
      android: {
        marginTop: 3
      }
    })
  },
  subtittle: {
    paddingBottom: 10,
    marginTop: -12,
    color: colors.charcoalGrey,
    fontSize: 12
  },
  leftIcon: {
    marginTop: 2
  },
  underlineContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: colors.paleGrey,
    borderBottomWidth: 1
  },
  container: {
    flexDirection: 'row'
  },
  initials: {
    color: 'white',
    fontSize: 13
  },
  initialsContainer: {
    backgroundColor: colors.silver,
    borderRadius: 4,
    padding: 5
  },
  rightIcon: {
    marginRight: 8
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
})

export default Item
