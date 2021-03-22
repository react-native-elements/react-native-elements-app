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
        <FAB
          loading
          visible={visible}
          icon={{ name: 'add', color: 'white' }}
          size="small"
        />
        <Text>Large Size</Text>
        <FAB
          visible={visible}
          icon={{ name: 'add', color: 'white' }}
          color="blue"
        />
        <Text>Primary Color</Text>
        <FAB
          visible={visible}
          label="Navigate"
          upperCase
          icon={{ name: 'place', color: 'white' }}
        />
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
          icon={{ name: 'delete', color: 'white' }}
          color="blue"
        />
        <FAB
          visible={!visible}
          onPress={() => setVisible(!visible)}
          placement="left"
          label="Show"
          icon={{ name: 'edit', color: 'white' }}
          color="green"
        />
      </View>
    </>
  );
};
