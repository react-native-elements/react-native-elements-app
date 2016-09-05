import React, { Component } from 'react'
import { Navigator } from 'react-native'
import Home from './Home'
import navigationBar from 'HSNavBar'

const initialRoute = {component: Home}

class App extends Component {
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

export default App
