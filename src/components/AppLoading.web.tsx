import React, {useEffect} from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});


export const AppLoading = (
  {
    startAsync,
    onError = () => null,
    onFinish = () => null,
    ActivityIndicatorProps = {},
  }
    : {
    startAsync: () => any,
    onError?: () => any,
    onFinish?: () => any,
    ActivityIndicatorProps?: any,
  },
) => {

  useEffect(() => {
    if(startAsync) Promise.resolve(startAsync()).then(onFinish()).catch(onError);
    else onFinish();
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} {...ActivityIndicatorProps} />
    </View>
  );
};
