import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeNavigator from './HomeNavigator';

const AuthNavigator = createSwitchNavigator(
  {
    AuthHomeNavigator: HomeNavigator,
  },
  {
    initialRouteName: 'AuthHomeNavigator',
  }
);

const RootNavigator = createAppContainer(AuthNavigator);

export default RootNavigator;

