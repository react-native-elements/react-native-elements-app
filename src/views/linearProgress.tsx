import React from 'react';
import { View, Text } from 'react-native';
import { Header } from './header';
import {
  Button,
  LinearProgress,
  LinearProgressProps,
} from 'react-native-elements';

const LinearProgressAPI: React.FunctionComponent = () => {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    let subs = true;
    if (progress < 1 && progress !== 0) {
      setTimeout(() => {
        if (subs) {
          setProgress(progress + 0.1);
        }
      }, 300);
    }
    return () => {
      subs = false;
    };
  }, [progress]);

  return (
    <View>
      <Header title="LinearProgress" />
      <View
        style={{
          margin: 10,
        }}
      >
        <Text>Linear Progress Indeterminate </Text>
        <LinearProgress style={{ marginVertical: 10 }} />
        <Text>Linear Progress Secondary color</Text>
        <LinearProgress style={{ marginVertical: 10 }} color="secondary" />
        <Text>Linear Progress with value</Text>
        <LinearProgress
          style={{ marginVertical: 10 }}
          value={progress}
          variant="determinate"
        />
        <Text>Linear Progress with value secondary color</Text>

        <LinearProgress
          style={{ marginVertical: 10 }}
          value={progress}
          variant="determinate"
          color="secondary"
        />
        <Button
          disabled={progress > 0}
          onPress={() => {
            setProgress(0.00001);
          }}
          title={'Start Progress'}
          containerStyle={{ margin: 10 }}
        />
      </View>
    </View>
  );
};

export default LinearProgressAPI;
