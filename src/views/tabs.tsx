import React from 'react';
import { View } from 'react-native';
import { Header } from './header';
import { Tab } from 'react-native-elements';

export default () => {
  const [index, setIndex] = React.useState(0);
  const [index2, setIndex2] = React.useState(0);

  return (
    <>
      <Header title="Tab" />
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Recent"
          icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="favourite"
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="cart"
          icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <View style={{ marginVertical: 20 }}>
        <Tab value={index2} onChange={(e: number) => setIndex2(e)}>
          <Tab.Item title="Tab 1" />
          <Tab.Item title="Disabled" disabled />
          <Tab.Item title="Tab 3" />
        </Tab>
      </View>
    </>
  );
};
