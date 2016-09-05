import React, { PropTypes } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Item from './Item'
import colors from 'HSColors'

let styles = {}

const LinkList = ({items, style, navigate}) => (
  <View style={[styles.container, style && style]}>
    {
      items.map((item, i) => {
        return (
          <Item
            navigate={navigate}
            item={item} key={i}
            borderStyle={items.length - 1 === i && {borderBottomWidth: 0}}
          />
        )
      })
    }
  </View>
)

LinkList.PropTypes = {
  items: PropTypes.array
}

styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    borderTopColor: colors.silver,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 1,
        shadowRadius: 1
      },
      android: {
        elevation: 1
      }
    })
  }
})

export default LinkList
