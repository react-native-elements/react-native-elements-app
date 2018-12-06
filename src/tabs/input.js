import React from 'react';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import InputHome from '../views/input_home';
import InputDetails from '../views/input_details';

const InputTabView = ({ navigation }) => <InputHome navigation={navigation} />;

const InputDetailTabView = ({ navigation }) => (
  <InputDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const InputTab = StackNavigator({
  Input: {
    screen: InputTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Input',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          containerStyle={{ marginLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
  Input_Detail: {
    screen: InputDetailTabView,
    path: '/input_detail',
    navigationOptions: {
      title: 'Input Detail',
    },
  },
});

export default InputTab;
