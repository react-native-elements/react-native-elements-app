import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import AppRootContainer from './src'
import configureStore from './src/store/configureStore'

const store = configureStore()

const HackathonStarter = () => (
  <Provider store={store}>
    <AppRootContainer />
  </Provider>
)

AppRegistry.registerComponent('HackathonStarter', () => HackathonStarter)
