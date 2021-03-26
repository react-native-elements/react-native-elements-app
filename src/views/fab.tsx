import React from 'react';
import { View, Text } from 'react-native';
import { FAB } from 'react-native-elements';
import { Header } from './header';

export default () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <Header title="FAB" />
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 5,
          flexGrow: 1,
        }}
      >
        <Text style={{color: '#397af8', paddingVertical: 10}}>Small Size</Text>
        <FAB loading visible={visible} iconName="add" size="small" />
        <Text style={{color: '#397af8', paddingVertical: 10}}>Large Size</Text>
        <FAB visible={visible} iconName="add" color="blue" />
        <Text style={{color: '#397af8', paddingVertical: 10}}>Primary Color</Text>
        <FAB visible={visible} label="Navigate" upperCase iconName="place" />
        <Text style={{color: '#397af8', paddingVertical: 10}}>Disabled</Text>
        <FAB
          visible={visible}
          disabled
          label="Extended"
          icon={{
            name: 'place',
            color: 'white',
          }}
        />
        <FAB
          visible={visible}
          onPress={() => setVisible(!visible)}
          placement="right"
          label="Hide"
          iconName="delete"
          color="blue"
        />
        <FAB
          visible={!visible}
          onPress={() => setVisible(!visible)}
          placement="left"
          label="Show"
          iconName="edit"
          color="green"
        />
      </View>
    </>
  );
};
