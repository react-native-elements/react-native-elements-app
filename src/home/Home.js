import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Button,
  Text
} from 'react-native-elements'

let styles = {}

const log = () => {
  console.log('hello!')
}

class Home extends Component {
  render () {
    const { toggleSideMenu } = this.props
    return (
      <ScrollView
        ref='ScrollView'
        style={{backgroundColor: 'white'}}>
        <View style={styles.hero}>
          <Icon color='white' name='whatshot' size={62} />
          <Text style={styles.heading}>Buttons</Text>
        </View>
        <Button
          fontFamily='Lato'
          small
          backgroundColor='#9C27B0'
          onPress={() => log()}
          title='SMALL BUTTON'
          buttonStyle={styles.button} />
        <Button
          fontFamily='Lato'
          small
          backgroundColor='#2196F3'
          icon={{name: 'accessibility'}}
          onPress={() => toggleSideMenu()}
          title='TOGGLE SIDE MENU'/>
        <Button
          fontFamily='Lato'
          iconRight
          small
          backgroundColor='#009688'
          icon={{name: 'invert-colors'}}
          onPress={() => log()}
          title='SMALL WITH RIGHT ICON'/>
        <Button
          fontFamily='Lato'
          iconRight
          small
          backgroundColor='#8BC34A'
          icon={{name: 'motorcycle'}}
          onPress={() => log()}
          title='SMALL WITH RIGHT ICON'/>
        <Button
          fontFamily='Lato'
          raised
          small
          backgroundColor='#FFC107'
          icon={{name: 'card-travel'}}
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>
        <Button
          fontFamily='Lato'
          raised
          small
          backgroundColor='#FF5722'
          icon={{name: 'touch-app'}}
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>
        <Button
          fontFamily='Lato'
          raised
          small
          backgroundColor='#9E9E9E'
          icon={{name: 'new-releases'}}
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>
        <Button
          fontFamily='Lato'
          raised
          small
          backgroundColor='#E91E63'
          icon={{name: 'business'}}
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>
        <Button
          fontFamily='Lato'
          raised
          small
          backgroundColor='#3F51B5'
          icon={{name: 'send'}}
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>
        <Button
          fontFamily='Lato'
          raised
          small
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>

        <Button
          fontFamily='Lato'
          onPress={() => log()}
          backgroundColor='#9C27B0'
          title='BUTTON' />
        <Button
          fontFamily='Lato'
          backgroundColor='#2196F3'
          icon={{name: 'cached'}}
          title='BUTTON WITH ICON' />
        <Button
          fontFamily='Lato'
          backgroundColor='#009688'
          raised
          icon={{name: 'album'}}
          title='RAISED WITH ICON' />
        <Button
          fontFamily='Lato'
          raised
          iconRight
          backgroundColor='#8BC34A'
          icon={{name: 'accessibility'}}
          title='RAISED RIGHT ICON' />
        <Button
          fontFamily='Lato'
          raised
          iconRight
          backgroundColor='#FFC107'
          icon={{name: 'account-balance'}}
          title='RAISED RIGHT ICON' />
        <Button
          fontFamily='Lato'
          raised
          backgroundColor='#FF5722'
          icon={{name: 'change-history'}}
          title='RAISED WITH ICON' />
        <Button
          fontFamily='Lato'
          buttonStyle={[{marginBottom: 15}]}
          icon={{name: 'code'}}
          backgroundColor='#9E9E9E'
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
