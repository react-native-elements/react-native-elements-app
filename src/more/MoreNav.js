import React, { Component } from 'react'
import { Navigator } from 'react-native'
import More from './More'
import navigationBar from 'HSNavBar'

const initialRoute = {component: More}

class MoreNav extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
    return (
      <route.component navigator={navigator} {...route.passProps} />
    )
  }
  render () {
    return (
      <Navigator
        navigationBar={navigationBar()}
        initialRoute={initialRoute}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}

export default MoreNav
