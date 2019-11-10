import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import FontsScreen from '../screens/FontsScreen';

import config from '../config/stack';

const FontsDrawerItem = createStackNavigator(
  {
    Fonts: {
      screen: FontsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Fonts',
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#f5f5f5',
        },
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            type="entypo"
            iconStyle={{ paddingLeft: 10 }}
            onPress={navigation.toggleDrawer}
          />
        ),
      }),
    },
  },
  config
);

FontsDrawerItem.navigationOptions = {
  drawerLabel: 'Fonts',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="font"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="font-awesome"
      color={tintColor}
    />
  ),
};

export default FontsDrawerItem;
