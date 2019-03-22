import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Playground from '../views/playground';

const PlaygroundDrawerItem = createStackNavigator({
  Playground: {
    screen: Playground,
    navigationOptions: ({ navigation }) => ({
      title: 'Playground',
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
});

PlaygroundDrawerItem.navigationOptions = {
  drawerLabel: 'Playground',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="brush"
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

export default PlaygroundDrawerItem;
