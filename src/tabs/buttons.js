import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ButtonsHome from '../views/buttons_home';
import ButtonsDetails from '../views/buttons_detail';

import config from '../config/stack';

const ButtonsTabView = ({ navigation }) => (
  <ButtonsHome navigation={navigation} />
);

const ButtonsDetailTabView = ({ navigation }) => (
  <ButtonsDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const ButtonsTab = createStackNavigator({
  Buttons: {
    screen: ButtonsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Buttons',
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
  Button_Detail: {
    screen: ButtonsDetailTabView,
    path: '/buttons_detail',
    navigationOptions: {
      title: 'Buttons Detail',
    },
  },
}, config);

export default ButtonsTab;
