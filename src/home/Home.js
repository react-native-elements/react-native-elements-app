import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import Text from 'HSText'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Button
} from 'react-native-elements'

let styles = {}

const log = () => {
  console.log('hello!')
}

class Home extends Component {
  render () {
    console.log('props:::', this.props)
    const { toggleSideMenu } = this.props
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.hero}>
          <Icon color='white' name='whatshot' size={62} />
          <Text style={styles.heading}>Buttons</Text>
        </View>
        <Button
          small
          backgroundColor={socialColors.facebook}
          onPress={() => log()}
          title='SMALL BUTTON'
          buttonStyle={styles.button} />
        <Button
          buttonStyle={styles.button}
          small
          backgroundColor={socialColors.stumbleupon}
          icon={{name: 'accessibility'}}
          onPress={() => toggleSideMenu()}
          title='TOGGLE SIDE MENU'/>
        <Button
          buttonStyle={styles.button}
          iconRight
          small
          backgroundColor={socialColors.quora}
          icon={{name: 'invert-colors'}}
          onPress={() => log()}
          title='SMALL WITH RIGHT ICON'/>
        <Button
          buttonStyle={styles.button}
          iconRight
          small
          backgroundColor={socialColors.tumblr}
          icon={{name: 'motorcycle'}}
          onPress={() => log()}
          title='SMALL WITH RIGHT ICON'/>
        <Button
          buttonStyle={styles.button}
          raised
          small
          backgroundColor={socialColors.foursquare}
          icon={{name: 'card-travel'}}
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>
        <Button
          buttonStyle={styles.button}
          raised
          small
          backgroundColor={socialColors.vimeo}
          icon={{name: 'touch-app'}}
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>
        <Button
          buttonStyle={styles.button}
          raised
          small
          backgroundColor={socialColors.twitter}
          icon={{name: 'new-releases'}}
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>
        <Button
          buttonStyle={styles.button}
          raised
          small
          backgroundColor={socialColors.linkedin}
          icon={{name: 'business'}}
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>
        <Button
          buttonStyle={styles.button}
          raised
          small
          backgroundColor={socialColors.pinterest}
          icon={{name: 'send'}}
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>
        <Button
          buttonStyle={styles.button}
          raised
          small
          onPress={() => log()}
          title='SMALL BUTTON RAISED'/>

        <Button
          buttonStyle={styles.button}
          onPress={() => log()}
          backgroundColor={socialColors.facebook}
          title='BUTTON' />
        <Button
          buttonStyle={styles.button}
          backgroundColor={socialColors.stumbleupon}
          icon={{name: 'cached'}}
          title='BUTTON WITH ICON' />
        <Button
          buttonStyle={styles.button}
          backgroundColor={socialColors.quora}
          raised
          icon={{name: 'album'}}
          title='RAISED WITH ICON' />
        <Button
          buttonStyle={styles.button}
          raised
          iconRight
          backgroundColor={socialColors.tumblr}
          icon={{name: 'accessibility'}}
          title='RAISED RIGHT ICON' />
        <Button
          buttonStyle={styles.button}
          raised
          iconRight
          backgroundColor={socialColors.foursquare}
          icon={{name: 'account-balance'}}
          title='RAISED RIGHT ICON' />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.vimeo}
          icon={{name: 'change-history'}}
          title='RAISED WITH ICON' />
        <Button
          buttonStyle={[{marginBottom: 15, marginTop: 15}]}
          icon={{name: 'code'}}
          backgroundColor={socialColors.twitter}
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
