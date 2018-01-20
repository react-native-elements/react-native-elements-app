import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Lists from '../views/lists';

const ListsDrawerItem = StackNavigator({
  Playground: { screen: Lists }
},
  {
    headerMode: 'none'
  }
);

ListsDrawerItem.navigationOptions = {
  drawerLabel: 'Lists',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="list"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default ListsDrawerItem;
