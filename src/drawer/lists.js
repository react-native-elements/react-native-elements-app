import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Lists from '../views/lists';

const ListsDrawerItem = StackNavigator(
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
            onPress={() => navigation.navigate('DrawerOpen')}
          />
        ),
      }),
    },
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
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default ListsDrawerItem;
