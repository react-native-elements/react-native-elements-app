import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import App from './App'
import {
  List,
  ListItem,
  SideMenu
} from 'react-native-elements'

class AppRootContainer extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }

  toggleSideMenu () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onSideMenuChange (isOpen: boolean) {
    this.state = {
      isOpen: isOpen
    }
  }

  render () {
    const src = require('./images/logo.png')

    const list = [
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

    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 30}}>
        <View style={{backgroundColor: 'darkgrey', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 10,}}>
          <Image
            source={src}
            style={styles.logo} />
        </View>
        <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              onPress={() => console.log('something')}
              avatar={l.avatar_url}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }
        </List>
      </View>
    )

    return (
      <SideMenu
        isOpen={this.state.isOpen}
        onChange={this.onSideMenuChange.bind(this)}
        menu={MenuComponent}>
        <App toggleSideMenu={this.toggleSideMenu.bind(this)} />
      </SideMenu>
    )
  }
}

styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 34
  },
})

export default AppRootContainer
