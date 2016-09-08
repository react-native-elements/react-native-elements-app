import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import Text from 'HSText'
import colors from 'HSColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  RNEButton
} from 'react-native-elements'

let styles = {}

const log = () => {
  console.log('hello!')
}

class Home extends Component {
  render () {
    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color='white' name='whatshot' size={62} />
          <Text style={styles.heading}>Buttons</Text>
        </View>
        <RNEButton
          buttonStyle={styles.button}
          onPress={() => log()}
          title='PRIMARY BUTTON' />
        <RNEButton
          icon={{name: 'cached'}}
          title='PRIMARY WITH ICON' />
        <RNEButton
          raised
          icon={{name: 'cached'}}
          title='RAISED WITH ICON' />
        <RNEButton
          secondary
          icon={{name: 'accessibility'}}
          title='SECONDARY BUTTON' />
        <RNEButton
          secondary2
          icon={{name: 'account-balance'}}
          title='SECONDARY2 BUTTON' />
        <RNEButton
          secondary3
          icon={{name: 'change-history'}}
          title='SECONDARY3 BUTTON' />
        <RNEButton
          buttonStyle={[{marginBottom: 15}]}
          icon={{name: 'code'}}
          backgroundColor={colors.grey1}
          title='ANOTHER BUTTON' />
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2
  },
  titleContainer: {
  },
  button: {
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default Home
