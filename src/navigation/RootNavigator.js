import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

const AuthNavigator = createSwitchNavigator(
  {
    AuthHomeNavigator: DrawerNavigator,
  },
  {
    initialRouteName: 'AuthHomeNavigator',
  }
);

const RootNavigator = createAppContainer(AuthNavigator);

export default RootNavigator;
