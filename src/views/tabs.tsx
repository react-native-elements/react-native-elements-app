import React from 'react';
import { Text } from 'react-native';
import { Header } from './header';
import { Tab } from 'react-native-elements';

export default () => {
  const [index, setIndex] = React.useState(0);

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
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="favourite"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="cart"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
      </Tab>
      {(() => {
        switch (index) {
          case 0:
            return <Text>Recent</Text>;
          case 1:
            return <Text>favourites</Text>;
          case 2:
            return <Text>Your Cart</Text>;
          default:
            return null;
        }
      })()}
    </>
  );
};
