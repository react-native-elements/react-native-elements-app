import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import { Header } from '../header';
import LoginScreen2 from './screen2';
import LoginScreen3 from './screen3';

export default class Login extends Component {
  render() {
    return (
      <>
        <Header title="Login Example" />
        <View style={styles.container}>
          <ScrollView horizontal pagingEnabled decelerationRate={0.993}>
            <LoginScreen2 />
            <LoginScreen3 />
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
