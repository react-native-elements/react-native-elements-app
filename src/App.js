import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

import Home from './home/HomeNav'
import About from './about/AboutRootContainer'
import Contact from './contact/ContactRootContainer'
import Pricing from './pricing/PricingRootContainer'
import More from './more/MoreRootContainer'

import { Tabs, Tab } from 'react-native-elements'

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
    const { toggleSideMenu } = this.props
    const { selectedTab } = this.state
    return (
      <Tabs hidesTabTouch>
        <Tab
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'HOME' : null}
          renderIcon={() => <Icon color={colors.grey2} name='whatshot' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='whatshot' size={26} />}
          onPress={() => this.changeTab('home')}>
          <Home toggleSideMenu={toggleSideMenu} />
        </Tab>
        <Tab
          tabStyle={selectedTab !== 'about' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'about'}
          title={selectedTab === 'about' ? 'ABOUT' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='important-devices' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='important-devices' size={26} />}
          onPress={() => this.changeTab('about')}>
          <About />
        </Tab>
        <Tab
          tabStyle={selectedTab !== 'contact' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'contact'}
          title={selectedTab === 'contact' ? 'CONTACT' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='contacts' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='contacts' size={26} />}
          onPress={() => this.changeTab('contact')}>
          <Contact />
        </Tab>
        <Tab
          tabStyle={selectedTab !== 'pricing' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'pricing'}
          title={selectedTab === 'pricing' ? 'PRICING' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='attach-money' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='attach-money' size={26} />}
          onPress={() => this.changeTab('pricing')}>
          <Pricing />
        </Tab>
        <Tab
          tabStyle={selectedTab !== 'more' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 8}]}
          selected={selectedTab === 'more'}
          title={selectedTab === 'more' ? 'MORE' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='list' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='list' size={26} />}
          onPress={() => this.changeTab('more')}>
          <More />
        </Tab>
      </Tabs>

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
