import React from "react";
import {View,StyleSheet,ActivityIndicator} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

const emptyFunc = () => null;

export default class AppLoading extends React.Component {
  componentDidMount() {
    const {startAsync,onError,onFinish} = this.props;

    const successCb = onFinish || emptyFunc;
    const errorCb = onError || emptyFunc;

    return !startAsync ? successCb() : Promise.resolve(startAsync())
      .then(successCb)
      .catch(errorCb)
  }

  render() {
    const {startAsync,onError,onFinish,autoHideSplash,...others} = this.props;
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} {...others} />
      </View>
    )
  }
}