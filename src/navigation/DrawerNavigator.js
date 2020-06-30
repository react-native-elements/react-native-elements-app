import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomContentComponent = (props) => (
  <SafeAreaView
    style={{ flex: 1, height: '100%', backgroundColor: '#43484d' }}
    forceInset={{ top: 'always', horizontal: 'never' }}
  >
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../images/logo.png')}
        style={{ width: '70%' }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItemList {...props} />
    </View>
  </SafeAreaView>
);

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <CustomContentComponent {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
