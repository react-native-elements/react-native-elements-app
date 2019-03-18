import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Ratings from '../views/ratings';

const RatingsDrawerItem = StackNavigator({
  Ratings: {
    screen: Ratings,

    navigationOptions: ({ navigation }) => ({
      title: 'Ratings',
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
});

RatingsDrawerItem.navigationOptions = {
  drawerLabel: 'Ratings',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="star"
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

export default RatingsDrawerItem;
