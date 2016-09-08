import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles

import {
  RNEList,
  RNEListItem,
  RNEText
} from 'react-native-elements'

const log = () => console.log('this is an example method')

const list1 = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Passwords',
    icon: 'fingerprint'
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline'
  },
  {
    title: 'Updates',
    icon: 'track-changes'
  }
]

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO'
  },
  {
    name: 'Christy Thomas',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer'
  },
  {
    name: 'Melissa Jones',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO'
  }
]

class More extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(list1)
    }
    this.renderRow = this.renderRow.bind(this)
  }
  renderRow (rowData, sectionID) {
    return (
      <RNEListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        icon={{name: rowData.icon}}
      />
    )
  }
  render () {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.hero}>
          <Icon color='white' name='sentiment-very-satisfied' size={62} />
          <RNEText style={styles.heading}>List</RNEText>
        </View>
        <RNEList>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
            />
        </RNEList>
        <RNEList containerStyle={{marginBottom: 20}}>
        {
          list2.map((l, i) => (
            <RNEListItem
              roundAvatar
              avatar={l.avatar_url}
              key={i}
              onPress={log}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }
        </RNEList>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  },
  container: {
    marginTop: 60
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
    backgroundColor: '#69DDFF'
  }
})

export default More
