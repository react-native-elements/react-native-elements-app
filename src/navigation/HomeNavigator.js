import React, { Component } from 'react';
import { View, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';

import Components from '../drawer/components';
import Ratings from '../drawer/ratings';
import Pricing from '../drawer/pricing';
import Login from '../drawer/login';
import Profile from '../drawer/profile';
import Lists from '../drawer/lists';
import Settings from '../drawer/settings';

const WINDOW_WIDTH = Dimensions.get('window').width;

const customContentComponent = (props) => (
  <SafeAreaView
    style={{ flex: 1, height: '100%', backgroundColor: '#43484d' }}
    forceInset={{ top: 'always', horizontal: 'never' }}
  >
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../images/logo.png')}
        style={{ width: '70%' }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerNavigatorItems {...props} />
    </View>
  </SafeAreaView>
);

const HomeNavigator = createAppContainer(
  createDrawerNavigator(
    {
      Login: {
        path: '/login',
        screen: Login,
      },
      Profile: {
        path: '/profile',
        screen: Profile,
      },
      Lists: {
        path: '/lists',
        screen: Lists,
      },
      Components: {
        path: '/components',
        screen: Components,
      },
      Ratings: {
        path: '/ratings',
        screen: Ratings,
      },
      Pricing: {
        path: '/pricing',
        screen: Pricing,
      },
      Settings: {
        path: '/settings',
        screen: Settings,
      },
    },
    {
      initialRouteName: 'Components',
      contentOptions: {
        activeTintColor: '#548ff7',
        activeBackgroundColor: 'transparent',
        inactiveTintColor: '#ffffff',
        inactiveBackgroundColor: 'transparent',
        backgroundColor: '#43484d',
        labelStyle: {
          fontSize: 15,
          marginLeft: 0,
        },
      },
      drawerWidth: Math.min(WINDOW_WIDTH * 0.8, 300),
      contentComponent: customContentComponent
    }
  )
);

export default HomeNavigator;