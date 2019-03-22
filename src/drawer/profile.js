import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Profile from '../views/profile';

const ProfileDrawerItem = createStackNavigator(
  {
    Playground: {
      screen: Profile,

      navigationOptions: ({ navigation }) => ({
        title: 'Profile',
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
  }
);

ProfileDrawerItem.navigationOptions = {
  drawerLabel: 'Profile',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="person"
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

export default ProfileDrawerItem;
