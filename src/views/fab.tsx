import React from 'react';
import { View, Text } from 'react-native';
import { Icon, FAB } from 'react-native-elements';
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
          visible={visible}
          icon="add"
          iconColor="#fff"
          color="blue"
          size="small"
        />
        <Text>Large Size</Text>
        <FAB visible={visible} icon="add" iconColor="#fff" color="blue" />
        <Text>Primary Color</Text>
        <FAB visible={visible} label="Extended" icon="place" iconColor="#fff" />
        <Text>Disabled</Text>
        <FAB
          visible={visible}
          disabled
          label="Extended"
          icon="place"
          iconColor="#fff"
        />
        <Text>Custom Icon component</Text>
        <FAB
          label="delete"
          IconComponent={<Icon name="delete" color="#fff" />}
          labelColor="white"
          upperCase
          visible={visible}
          color="blue"
        />
        <FAB
          visible={visible}
          onPress={() => setVisible(!visible)}
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
          }}
          label="Invisible"
          icon="edit"
          iconColor="#fff"
          color="blue"
        />
        <FAB
          visible={!visible}
          onPress={() => setVisible(!visible)}
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
          }}
          label="Visible"
          icon="add"
          iconColor="#fff"
          color="green"
        />
      </View>
    </>
  );
};
