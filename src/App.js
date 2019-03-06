import React from 'react';
import AppLoading from "./components/AppLoading";
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import {cacheAssets,cacheFonts} from "./helpers/AssetsCaching";

import Components from './drawer/components';
import Ratings from './drawer/ratings';
import Pricing from './drawer/pricing';
/*
import Login from './drawer/login';
import Profile from './drawer/profile';
import Lists from './drawer/lists';
*/
import Settings from './drawer/settings';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('./images/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItems {...props} />
    </View>
  </View>
);

const MainRoot = DrawerNavigator(
  {
/*
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
*/
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
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheAssets([
      require("./assets/images/bg_screen1.jpg"),
      require("./assets/images/bg_screen2.jpg"),
      require("./assets/images/bg_screen3.jpg"),
      require("./assets/images/bg_screen4.jpg"),
      require("./assets/images/user-cool.png"),
      require("./assets/images/user-hp.png"),
      require("./assets/images/user-student.png"),
      require("./assets/images/avatar1.jpg"),
    ]);

    const fontAssets = cacheFonts({
      "FontAwesome": require("@expo/vector-icons/fonts/FontAwesome.ttf"),
      "Ionicons": require("@expo/vector-icons/fonts/Ionicons.ttf"),
      "Entypo": require("@expo/vector-icons/fonts/Entypo.ttf"),
      "Material Design Icons": require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf"),
    });

    await Promise.all([imageAssets, fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }

    return <MainRoot />;
  }
}