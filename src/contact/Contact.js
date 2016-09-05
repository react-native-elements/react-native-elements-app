import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import Text from 'HSText'
import colors from 'HSColors'
import FormInput from 'HSFormInput'
import FormLabel from 'HSFormLabel'
import Button from 'HSButton'
import Icon from 'react-native-vector-icons/MaterialIcons'

let styles = {}

class Contact extends Component {
  render () {
    return (
      <ScrollView>
        <View style={styles.headingContainer}>
          <Icon color='white' name='pets' size={62} />
          <Text style={styles.heading}>Forms</Text>
        </View>
        <FormLabel containerStyle={styles.labelContainerStyle}>Name</FormLabel>
        <FormInput />
        <FormLabel containerStyle={styles.labelContainerStyle}>Address</FormLabel>
        <FormInput />
        <FormLabel containerStyle={styles.labelContainerStyle}>Phone</FormLabel>
        <FormInput />
        <Button
          onPress={() => console.log('fuck off')}
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
