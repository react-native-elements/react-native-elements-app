import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Card,
  SocialIcon,
  Divider,
  ButtonGroup
} from 'react-native-elements'

import * as RNElements from 'react-native-elements'

let styles = {}

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'thot leader',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'
  },
  {
    name: 'jsa',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg'
  },
  {
    name: 'andy vitale',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg'
  },
  {
    name: 'katy friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
  }
]

class About extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  render () {
    const buttons = ['Button1', 'Button2']
    const { selectedIndex } = this.state
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.headerContainer}>
          <Icon color='white' name='invert-colors' size={62} />
          <Text style={styles.heading}>Components</Text>
        </View>
        <View style={{marginTop: 20}}>
          <ButtonGroup
            textStyle={{fontSize: 13}}
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons} />
        </View>
        <View style={styles.container}>
          <Card
            title='CARD WITH DIVIDER'>
            {
              users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode='cover'
                      source={{uri: u.avatar}} />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                )
              })
            }
          </Card>
          <Card containerStyle={{marginTop: 15}} title='FONTS'>
            <Text style={styles.fonts} h1>h1 Heading</Text>
            <Text style={styles.fonts} h2>h2 Heading</Text>
            <Text style={styles.fonts} h3>h3 Heading</Text>
            <Text style={styles.fonts} h4>h4 Heading</Text>
            <Text style={styles.fonts} >Normal Text</Text>
          </Card>
          <Card
            title='ICONS'
            containerStyle={{marginTop: 15}}>
            <View style={[styles.social, {marginTop: 15, marginBottom: 15, justifyContent: 'space-around'}]}>
              <RNElements.Icon
                onPress={() => console.log('hello')}
                type='font-awesome'
                color='#e14329'
                name='hashtag' />
              <RNElements.Icon
                onPress={() => console.log('hello')}
                type='font-awesome'
                color='#02b875'
                name='rocket' />
              <RNElements.Icon
                onPress={() => console.log('hello')}
                color='#000000'
                name='snapchat-ghost'
                type='font-awesome' />
              <RNElements.Icon
                color='#6441A5'
                name='btc'
                type='font-awesome'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                color='#f50'
                name='heartbeat'
                type='font-awesome'
                onPress={() => console.log('hello')} />
            </View>
             <View style={[styles.social,{marginTop: 15, marginBottom: 15, justifyContent: 'space-around'}]}>
              <RNElements.Icon
                name='rowing'
                color='#673AB7'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                name='g-translate'
                color='#03A9F4'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                color='#009688'
                name='sc-telegram'
                type='evilicon'
                onPress={() => console.log('hello')} /> 
              <RNElements.Icon
                color='#8BC34A'
                name='social-apple'
                type='foundation'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                color='#FFC107'
                name='ios-american-football'
                type='ionicon'
                onPress={() => console.log('hello')} />
             </View>

             <View>
              <View style={[styles.social,{ justifyContent: 'space-around'}]}>
                <RNElements.Icon
                  raised
                  name='vpn-key'
                  color='#E91E63'
                  onPress={() => console.log('hello')} />
                <RNElements.Icon
                  raised
                  name='ring-volume'
                  color='#3F51B5'
                  onPress={() => console.log('hello')} />
                <RNElements.Icon
                  raised
                  color='#00BCD4'
                  name='weekend'
                  onPress={() => console.log('hello')} /> 
                <RNElements.Icon
                  raised
                  color='#CDDC39'
                  name='bubble-chart'
                  onPress={() => console.log('hello')} />
                <RNElements.Icon
                  raised
                  color='#FF5722'
                  name='burst-mode'
                  onPress={() => console.log('hello')} />
              </View>
             </View>

             <View style={[styles.social,{ justifyContent: 'space-around'}]}>
              <RNElements.Icon
                reverse
                raised
                name='account-balance'
                color='#673AB7'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                raised
                name='android'
                color='#03A9F4'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                raised
                color='#009688'
                name='code'
                onPress={() => console.log('hello')} /> 
              <RNElements.Icon
                reverse
                raised
                color='#8BC34A'
                name='card-travel'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                raised
                color='#FF9800'
                name='extension'
                onPress={() => console.log('hello')} />
            </View>

            <View style={[styles.social,{ justifyContent: 'space-around'}]}>
              <RNElements.Icon
                reverse
                name='group-work'
                color='#E91E63'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                name='lightbulb-outline'
                color='#3F51B5'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                color='#00BCD4'
                name='pets'
                onPress={() => console.log('hello')} /> 
              <RNElements.Icon
                reverse
                color='#CDDC39'
                name='polymer'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                color='#FF5722'
                name='touch-app'
                onPress={() => console.log('hello')} />
            </View>
          </Card>
          <Card
            title='SOCIAL ICONS'
            containerStyle={{marginTop: 15}}>
            <View style={[styles.social, { marginTop: 13, justifyContent: 'space-around'}]}>
              <SocialIcon
                raised={false}
                type='gitlab'
                onPress={() => console.log('hi!')}
              />
              <SocialIcon
                type='medium'
                onPress={() => console.log('hi2!')}
              />
              <SocialIcon
                type='github-alt'
                onPress={() => console.log('hi3!')}
              />
              <SocialIcon
                type='twitch'
              />
              <SocialIcon
                type='soundcloud'
              />
            </View>
            <View style={[styles.social, { marginTop: 13, justifyContent: 'space-around'}]}>
              <SocialIcon
                raised={false}
                type='facebook'
                onPress={() => console.log('hi!')}
              />
              <SocialIcon
                type='twitter'
                onPress={() => console.log('hi2!')}
              />
              <SocialIcon
                type='instagram'
                onPress={() => console.log('hi3!')}
              />
              <SocialIcon
                raised={false}
                type='codepen'
              />
              <SocialIcon
                raised={false}
                type='youtube'
              />
            </View>
          </Card>
          <Card
            title='LIGHT SOCIAL ICONS'
            containerStyle={{marginTop: 15}}>
            <View style={[styles.social, {justifyContent: 'space-around'}]}>
              <SocialIcon
                light
                raised={false}
                type='gitlab'
                onPress={() => console.log('hi!')}
              />
              <SocialIcon
                light
                type='medium'
                onPress={() => console.log('hi2!')}
              />
              <SocialIcon
                light
                type='github-alt'
                onPress={() => console.log('hi3!')}
              />
              <SocialIcon
                light
                type='twitch'
              />
              <SocialIcon
                light
                type='soundcloud'
              />
            </View>
          </Card>
          <Card
            containerStyle={{marginTop: 15, marginBottom: 15}}
            title='SOCIAL BUTTONS'>
            <View style={styles.socialButtons}>
              <SocialIcon
                button
                type='medium'
              />
              <SocialIcon
                button
                type='twitch'
              />
              <SocialIcon
                title='Sign In With Facebook'
                button
                fontWeight='400'
                type='facebook'
              />
              <SocialIcon
                title='Some Twitter Message'
                button
                type='twitter'
              />
              <SocialIcon
                light
                button
                title='Some Instagram Message'
                type='instagram'
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  fonts: {
    marginBottom: 8
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default About
