import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import ProfileScreen from '../screens/ProfileScreen';

import config from '../config/stack';

const ProfileTab = createStackNavigator(
  {
    Home: {
      screen: ProfileScreen,
      path: '/',
      navigationOptions: ({ navigation }) => ({
        title: 'Theresa, 26',
        headerTitleStyle: {
          color: 'white',
        },
        headerStyle: {
          backgroundColor: 'rgba(47,44,60,1)',
          borderBottomWidth: 0,
        },
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            type="entypo"
            color="white"
            containerStyle={{ marginLeft: 10 }}
            onPress={navigation.toggleDrawer}
          />
        ),
      }),
    },
  },
  config
);

export default ProfileTab;
