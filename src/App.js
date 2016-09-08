import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

import Home from './home/HomeRootContainer'
import About from './about/AboutRootContainer'
import Contact from './contact/ContactRootContainer'
import Pricing from './pricing/PricingRootContainer'
import More from './more/MoreRootContainer'

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
          <Home />
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
          <About />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={[
            selectedTab !== 'contact' && { marginBottom: -6 },
            selectedTab === 'contact' && Platform.OS === 'android' && {marginBottom: -3}
          ]}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[
            styles.titleSelected,
            {marginBottom: 7},
            Platform.OS === 'android' ? {marginTop: 1 } : {marginTop: -3}
          ]}
          selected={selectedTab === 'contact'}
          title={selectedTab === 'contact' ? 'CONTACT' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='contacts' size={26} />}
          renderSelectedIcon={() => (
              <Icon
                color={colors.primary}
                name='contacts'
                size={Platform.OS === 'ios' ? 26 : 22 }  />
            )}
          onPress={() => this.changeTab('contact')}>
          <Contact />
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
          <Pricing />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'more' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 8}]}
          selected={selectedTab === 'more'}
          title={selectedTab === 'more' ? 'MORE' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='list' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='list' size={26} />}
          onPress={() => this.changeTab('more')}>
          <More />
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
