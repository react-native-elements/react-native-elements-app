import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import SettingsScreen from '../screens/SettingsScreen';

import config from '../config/stack';

const SettingsTab = createStackNavigator(
  {
    Home: {
      screen: SettingsScreen,
      path: '/',
      navigationOptions: ({ navigation }) => ({
        title: 'Settings',
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            type="entypo"
            containerStyle={{ marginLeft: 10 }}
            onPress={navigation.toggleDrawer}
          />
        ),
      }),
    },
  },
  config
);

export default SettingsTab;
