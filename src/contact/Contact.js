import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  RNEButton,
  RNEText,
  RNEFormInput,
  RNEFormLabel
} from 'react-native-elements'

let styles = {}

class Contact extends Component {
  render () {
    return (
      <ScrollView>
        <View style={styles.headingContainer}>
          <Icon color='white' name='pets' size={62} />
          <RNEText style={styles.heading}>Forms</RNEText>
        </View>
        <RNEFormLabel containerStyle={styles.labelContainerStyle}>Name</RNEFormLabel>
        <RNEFormInput placeholder='Please enter your name...' />
        <RNEFormLabel containerStyle={styles.labelContainerStyle}>Address</RNEFormLabel>
        <RNEFormInput placeholder='Please enter your address...' />
        <RNEFormLabel containerStyle={styles.labelContainerStyle}>Phone</RNEFormLabel>
        <RNEFormInput placeholder='Please enter your phone number...' />
        <RNEButton
          raised
          onPress={() => console.log('yo')}
          icon={{name: 'done'}}
          buttonStyle={{marginTop: 15}}
          title='SUBMIT' />
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  headingContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary2
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  labelContainerStyle: {
    marginTop: 8
  }
})

export default Contact
