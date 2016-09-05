import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import Text from 'HSText'
import Button from 'HSButton'
import colors from 'HSColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

let styles = {}

const log = () => {
  console.log('hello!')
}

class Home extends Component {
  render () {
    return (
      <ScrollView>
        <View style={{marginTop: 60, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: colors.primary2}}>
          <Icon color='white' name='whatshot' size={62} />
          <Text style={styles.heading}>Buttons</Text>
        </View>
        <Button
          buttonStyle={styles.button}
          onPress={log}
          title='PRIMARY BUTTON' />
        <Button
          buttonStyle={styles.button}
          icon={{name: 'cached'}}
          title='PRIMARY WITH ICON' />
        <Button
          secondary
          buttonStyle={styles.button}
          icon={{name: 'accessibility'}}
          title='SECONDARY BUTTON' />
        <Button
          secondary2
          buttonStyle={styles.button}
          icon={{name: 'account-balance'}}
          title='SECONDARY2 BUTTON' />
        <Button
          secondary3
          buttonStyle={styles.button}
          icon={{name: 'change-history'}}
          title='SECONDARY3 BUTTON' />
        <Button
          buttonStyle={styles.button}
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
