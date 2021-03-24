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
          flexGrow: 1,
        }}
      >
        <Text>Small Size</Text>
        <FAB loading visible={visible} iconName="add" size="small" />
        <Text>Large Size</Text>
        <FAB visible={visible} iconName="add" color="blue" />
        <Text>Primary Color</Text>
        <FAB visible={visible} label="Navigate" upperCase iconName="place" />
        <Text>Disabled</Text>
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
