import React from 'react';

import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ListsHome from '../views/lists_home';
import ListsDetails from '../views/lists_detail';

import config from '../config/stack';

const ListsTabView = ({ navigation }) => (
  <ListsHome banner="Lists" navigation={navigation} />
);

const ListsDetailTabView = ({ navigation }) => (
  <ListsDetails banner="Lists Detail" navigation={navigation} />
);

const ListsTab = createStackNavigator({
  Home: {
    screen: ListsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Lists',
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
  Lists_Detail: {
    screen: ListsDetailTabView,
    path: 'lists_detail',
    navigationOptions: {
      title: 'Lists Detail',
    },
  },
}, config);

export default ListsTab;
