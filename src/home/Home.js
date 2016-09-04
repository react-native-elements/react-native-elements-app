import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native'
import Text from '../components/text/Text'
import Card from '../components/containers/Card'
import colors from '../config/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/buttons/Button'

let styles = {}

const log = () => {
  console.log('hello!')
}

class App extends Component {
  render () {
    return (
      <ScrollView>
        <View style={{marginTop: 60, justifyContent: 'center', alignItems: 'center', padding: 30, backgroundColor: colors.primary2}}>
          <Icon color='white' name='whatshot' size={62} />
        </View>
        <Button
          onPress={log}
          title='PRIMARY BUTTON' />
        <Button
          icon={{name: 'cached'}}
          primary1
          title='BUTTON WITH ICON' />
        <Button
          icon={{name: 'announcement'}}
          primary2
          title='BUTTON WITH ICON' />
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
        <View style={[styles.container]}>
          <Card>
            <Text>Hello</Text>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  }
})

export default App
