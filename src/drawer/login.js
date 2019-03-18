import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../views/login';

const LoginDrawerItem = StackNavigator(
  {
    Playground: {
      screen: Login,

      navigationOptions: ({ navigation }) => ({
        title: 'Login',
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

LoginDrawerItem.navigationOptions = {
  drawerLabel: 'Login',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="email"
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

export default LoginDrawerItem;
