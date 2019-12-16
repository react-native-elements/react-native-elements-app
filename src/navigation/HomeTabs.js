import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import ButtonsTab from '../tabs/buttons';
import ListsTab from '../tabs/lists';
import InputTab from '../tabs/input';
import Profile from '../tabs/Profile';
import Settings from '../tabs/settings';

const TabBarComponent = props => <BottomTabBar {...props} />;

const HomeTabs = createBottomTabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: '/buttons',
      navigationOptions: {
        tabBarLabel: 'Buttons',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={24}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    ListsTab: {
      screen: ListsTab,
      path: '/lists',
      navigationOptions: {
        tabBarLabel: 'Lists',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="list" size={24} type="entypo" color={tintColor} />
        ),
      },
    },
    InputTab: {
      screen: InputTab,
      path: '/input',
      navigationOptions: {
        tabBarLabel: 'Input',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="wpforms"
            size={24}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
    ProfileTab: {
      screen: Profile,
      path: '/profile',
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="person" size={24} type="material" color={tintColor} />
        ),
      },
    },
    SettingsTab: {
      screen: Settings,
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="cog" size={24} type="font-awesome" color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'ButtonsTab',
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
    },
    tabBarComponent: props => {
      const currentIndex = props.navigation.state.index;

      return (
        <TabBarComponent
          {...props}
          style={
            currentIndex === 3 && {
              backgroundColor: 'rgba(47,44,60,1)',
              borderTopWidth: 0,
            }
          }
          navigation={{
            ...props.navigation,
            state: {
              ...props.navigation.state,
              routes: props.navigation.state.routes,
            },
          }}
        />
      );
    },
  }
);

export default HomeTabs;

// // Workaround to avoid crashing when you come back on Components screen
// // and you were not on the Buttons tab
// export default createStackNavigator(
//   {
//     ComponentsTabs: { screen: Components },
//   },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//       drawerLabel: 'Components',
//       drawerIcon: ({ tintColor }) => (
//         <Icon
//           name="settings"
//           size={30}
//           iconStyle={{
//             width: 30,
//             height: 30,
//           }}
//           type="material"
//           color={tintColor}
//         />
//       ),
//     },
//   }
// );
