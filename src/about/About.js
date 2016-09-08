import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  RNEText,
  RNECard,
  RNESocialIcon
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
      <ScrollView>
        <View style={styles.headerContainer}>
          <Icon color='white' name='invert-colors' size={62} />
          <RNEText style={styles.heading}>Components</RNEText>
        </View>
        <View style={styles.container}>
          <RNECard
            title='CARD WITH DIVIDER'>
            {
              users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode='center'
                      source={{uri: u.avatar}} />
                    <RNEText style={styles.name}>{u.name}</RNEText>
                  </View>
                )
              })
            }
          </RNECard>
          <RNECard containerStyle={{marginTop: 15}} title='FONTS'>
            <RNEText style={styles.fonts} h1>h1 Heading</RNEText>
            <RNEText style={styles.fonts} h2>h2 Heading</RNEText>
            <RNEText style={styles.fonts} h3>h3 Heading</RNEText>
            <RNEText style={styles.fonts} h4>h4 Heading</RNEText>
            <RNEText style={styles.fonts} >Normal Text</RNEText>
          </RNECard>
          <RNECard
            title='SOCIAL ICONS'
            containerStyle={{marginTop: 15}}>
            <View style={styles.social}>
              <RNESocialIcon
                type='facebook'
              />
              <RNESocialIcon
                type='twitter'
              />
              <RNESocialIcon
                type='instagram'
              />
              <RNESocialIcon
                type='tumblr'
              />
              <RNESocialIcon
                type='youtube'
              />
            </View>
          </RNECard>
          <RNECard
            containerStyle={{marginTop: 15}}
            title='SOCIAL BUTTONS'>
            <View style={styles.socialButtons}>
              <RNESocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
              />
              <RNESocialIcon
                title='Some Twitter Message'
                button
                type='twitter'
              />
              <RNESocialIcon
                button
                type='instagram'
              />
              <RNESocialIcon
                button
                type='tumblr'
              />
              <RNESocialIcon
                button
                type='youtube'
              />
            </View>
          </RNECard>
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
