import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import HomeNav from './home/HomeNav'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

let styles = {}

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'home'
    }
    this.changeTab = this.changeTab.bind(this)
  }
  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }
  render () {
    const { selectedTab } = this.state
    return (
      <TabNavigator>
        <TabNavigator.Item
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'HOME' : null}
          renderIcon={() => <Icon color={colors.grey2} name='whatshot' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='whatshot' size={26} />}
          onPress={() => this.changeTab('home')}>
          <HomeNav />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'about' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'about'}
          title={selectedTab === 'about' ? 'ABOUT' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='important-devices' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='important-devices' size={26} />}
          onPress={() => this.changeTab('about')}>
          <HomeNav />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'contact' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'contact'}
          title={selectedTab === 'contact' ? 'CONTACT' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='contacts' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='contacts' size={26} />}
          onPress={() => this.changeTab('contact')}>
          <HomeNav />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'pricing' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'pricing'}
          title={selectedTab === 'pricing' ? 'PRICING' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='attach-money' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='attach-money' size={26} />}
          onPress={() => this.changeTab('pricing')}>
          <HomeNav />
        </TabNavigator.Item>
      </TabNavigator>

    )
  }
}

styles = StyleSheet.create({
  titleStyle: {
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default App
