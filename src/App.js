import React, { useState } from 'react';
import { View, Image, Dimensions } from 'react-native';
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation';

import AppLoading from './components/AppLoading';
import { cacheImages, cacheFonts } from './helpers/AssetsCaching';

import Components from './drawer/components';
import Ratings from './drawer/ratings';
import Pricing from './drawer/pricing';
import Login from './drawer/login';
import Profile from './drawer/profile';
import Lists from './drawer/lists';
import Settings from './drawer/settings';
import vectorFonts from './helpers/vector-fonts';

const WINDOW_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('./images/logo.png')}
        style={{ width: Math.min(WINDOW_WIDTH * 0.57, 200) }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItems {...props} />
    </View>
  </View>
);

const MainRoot = createAppContainer(
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
        labelStyle: {
          fontSize: 15,
          marginLeft: 0,
        },
      },
      drawerWidth: Math.min(WINDOW_WIDTH * 0.8, 300),
      contentComponent: CustomDrawerContentComponent,
    }
  )
);

export default () => {
  const [isReady, setIsReady] = useState(false);

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('../assets/images/bg_screen1.jpg'),
      require('../assets/images/bg_screen2.jpg'),
      require('../assets/images/bg_screen3.jpg'),
      require('../assets/images/bg_screen4.jpg'),
      require('../assets/images/user-cool.png'),
      require('../assets/images/user-hp.png'),
      require('../assets/images/user-student.png'),
      require('../assets/images/avatar1.jpg'),
    ]);

    const fontAssets = cacheFonts([
      ...vectorFonts,
      { georgia: require('../assets/fonts/Georgia.ttf') },
      { regular: require('../assets/fonts/Montserrat-Regular.ttf') },
      { light: require('../assets/fonts/Montserrat-Light.ttf') },
      { bold: require('../assets/fonts/Montserrat-Bold.ttf') },
      { UbuntuLight: require('../assets/fonts/Ubuntu-Light.ttf') },
      { UbuntuBold: require('../assets/fonts/Ubuntu-Bold.ttf') },
      { UbuntuLightItalic: require('../assets/fonts/Ubuntu-Light-Italic.ttf') },
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <MainRoot />;
};
