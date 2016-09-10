import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Card,
  SocialIcon
} from 'react-native-elements'

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
  render () {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.headerContainer}>
          <Icon color='white' name='invert-colors' size={62} />
          <Text style={styles.heading}>Components</Text>
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
                      resizeMode='center'
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
            title='SOCIAL ICONS'
            containerStyle={{marginTop: 15}}>
            <View style={styles.social}>
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
            <View style={styles.social}>
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
            <View style={styles.social}>
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
