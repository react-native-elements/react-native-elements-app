import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Lists from '../views/lists';

import config from '../config/stack';

const ListsDrawerItem = createStackNavigator(
  {
    Playground: {
      screen: Lists,

      navigationOptions: ({ navigation }) => ({
        title: 'Lists',
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
  config,
);

ListsDrawerItem.navigationOptions = {
  drawerLabel: 'Lists',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="list"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default ListsDrawerItem;
