import React from 'react';
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import HomeTabs from './HomeTabs';

const HomeNavigator = createStackNavigator(
  {
    Home: HomeTabs,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);

HomeNavigator.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
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

export default HomeNavigator;
