import React from 'react';
import { View } from 'react-native';
import { Counter } from 'react-native-elements';
import { Header } from './header';

type CounterComponentProps = {};

const CounterComponent: React.FunctionComponent<CounterComponentProps> = () => {
  return (
    <>
      <Header title="Counter" />
      <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
        <Counter
          initialValue={2}
          onValueChange={(value) => console.log(value)}
        />
      </View>
    </>
  );
};

export default CounterComponent;
