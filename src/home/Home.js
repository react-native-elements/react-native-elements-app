import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import Text from 'HSText'
import Card from 'HSCard'
import Button from 'HSButton'
import colors from 'HSColors'
import fonts from 'HSFonts'
import Divider from 'HSDivider'
import Icon from 'react-native-vector-icons/MaterialIcons'

let styles = {}

const log = () => {
  console.log('hello!')
}

class App extends Component {
  render () {
    return (
      <ScrollView>
        <View style={{marginTop: 60, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: colors.primary2}}>
          <Icon color='white' name='whatshot' size={62} />
          <Text style={styles.heading}>Buttons</Text>
        </View>
        <Button
          onPress={log}
          title='PRIMARY BUTTON' />
        <Button
          icon={{name: 'cached'}}
          title='PRIMARY WITH ICON' />
        <Button
          secondary
          icon={{name: 'accessibility'}}
          title='SECONDARY BUTTON' />
        <Button
          secondary2
          icon={{name: 'account-balance'}}
          title='SECONDARY2 BUTTON' />
        <Button
          secondary3
          icon={{name: 'change-history'}}
          title='SECONDARY3 BUTTON' />
        <Button
          icon={{name: 'code'}}
          backgroundColor={colors.grey1}
          title='ANOTHER BUTTON' />
        <Button
          buttonStyle={{backgroundColor: 'red'}}
          title='CUSTOM BUTTON'
          icon={{size: 18, name: 'explore'}}
          fontSize={16}
          />
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
  titleContainer: {
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

export default App
