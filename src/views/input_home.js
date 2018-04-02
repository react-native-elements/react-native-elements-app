import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import { Input, SearchBar, Icon, Button } from 'react-native-elements'

import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const dummySearchBarProps = {
  showLoading: true,
  onFocus: () => console.log("focus"),
  onBlur: () => console.log("blur"),
  onCancel: () => console.log("cancel"),
  onClearText: () => console.log("cleared"),
  onChangeText: text => console.log("text:", text),
}

class InputHome extends Component {
  render() {
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <Icon color="white" name="search" size={62} />
          <Text style={styles.heading}>Search Bars</Text>
        </View>
        <SearchBar placeholder="iOS searchbar" platform="ios" {...dummySearchBarProps} />
        <SearchBar placeholder="Android searchbar" platform="android" {...dummySearchBarProps} />
        <SearchBar placeholder="Default searchbar" {...dummySearchBarProps} />
        <View style={[styles.headerContainer, { backgroundColor: '#616389', marginTop: 20 }]}>
          <Icon color="white" name="input" size={62} />
          <Text style={styles.heading}>Inputs</Text>
        </View>
        <View style={{ alignItems: 'center', marginBottom: 16 }}>
          <Input
            containerStyle={{ width: '90%' }}
            placeholder="Input with label"
            label="LABEL"
            labelStyle={{ marginTop: 16 }}
          />
          <Input containerStyle={styles.inputContainerStyle} placeholder="Simple input" />
          <Input
            leftIcon={
              <Icon
                name="map-marker"
                type="font-awesome"
                color='#86939e'
                size={25}
              />
            }
            containerStyle={styles.inputContainerStyle}
            placeholder="Input with left icon"
          />
          <Input
            rightIcon={
              <Icon
                name="chevron-right"
                type="entypo"
                color='#86939e'
                size={25}
              />
            }
            containerStyle={styles.inputContainerStyle}
            placeholder="Input with right icon"
          />
          <Input
            containerStyle={styles.inputContainerStyle}
            placeholder="Input with error message"
            errorMessage="Invalid input"
          />
          <Input
            containerStyle={[styles.inputContainerStyle]}
            placeholder="Shake input"
            ref={ref => this.shakeInput = ref}
            rightIcon={
              <Button
                title="Shake"
                onPress={() => this.shakeInput && this.shakeInput.shake()}
              />
            }
            errorMessage="Shake me on error !"
          />
        </View>
        <View style={styles.contentView}>
          <View style={{ backgroundColor: "#2F343B", width: SCREEN_WIDTH, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 30,
                marginVertical: 10,
                fontWeight: "300",
                marginTop: 10,
                color: "white"
              }}
            >
              Login
            </Text>
            <View style={styles.overlay}>
              <View style={styles.triangleLeft} />
              <Input inputContainerStyle={{ borderWidth: 1, borderColor: "white", borderLeftWidth: 0, height: 50, width: SCREEN_WIDTH - 80, backgroundColor: "white" }} leftIcon={<MaterialIcon name="email-outline" color="black" size={25} />} placeholder="Email" placeholderTextColor="black" autoCapitalize="none" autoCorrect={false} keyboardAppearance="light" keyboardType="email-address" returnKeyType="next" ref={input => (this.emailInput = input)} onSubmitEditing={() => {
                  this.passwordInput.focus();
                }} blurOnSubmit={false} />
              <View style={styles.triangleRight} />
            </View>
            <View style={[styles.overlay, { marginBottom: 30, marginTop: 1 }]}>
              <View style={styles.triangleLeft} />
              <Input inputContainerStyle={{ borderWidth: 1, borderColor: "white", borderLeftWidth: 0, height: 50, width: SCREEN_WIDTH - 80, backgroundColor: "white" }} leftIcon={<SimpleIcon name="lock" color="black" size={25} />} placeholder="Password" placeholderTextColor="black" autoCapitalize="none" keyboardAppearance="light" secureTextEntry={true} autoCorrect={false} keyboardType="default" returnKeyType="done" ref={input => (this.passwordInput = input)} blurOnSubmit={true} />
              <View style={styles.triangleRight} />
            </View>
          </View>
          <View style={{ backgroundColor: "rgba(46, 50, 72, 1)", width: SCREEN_WIDTH, alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                marginVertical: 10,
                fontWeight: "300"
              }}
            >
              Sign up
            </Text>
            <Input inputContainerStyle={{ borderRadius: 40, borderWidth: 1, borderColor: "rgba(110, 120, 170, 1)", height: 50, width: SCREEN_WIDTH - 50, marginVertical: 10 }} leftIcon={<SimpleIcon name="user" color="rgba(110, 120, 170, 1)" size={25} />} iconContainerStyle={{ marginLeft: 20 }} placeholder="Username" placeholderTextColor="rgba(110, 120, 170, 1)" inputStyle={{ marginLeft: 10, color: "white" }} autoCapitalize="none" autoCorrect={false} keyboardAppearance="light" keyboardType="email-address" returnKeyType="next" ref={input => (this.usernameInput = input)} onSubmitEditing={() => {
                this.email2Input.focus();
              }} blurOnSubmit={false} />
            <Input inputContainerStyle={{ borderRadius: 40, borderWidth: 1, borderColor: "rgba(110, 120, 170, 1)", height: 50, width: SCREEN_WIDTH - 50, marginVertical: 10 }} leftIcon={<MaterialIcon name="email-outline" color="rgba(110, 120, 170, 1)" size={25} />} iconContainerStyle={{ marginLeft: 20 }} placeholder="Email" placeholderTextColor="rgba(110, 120, 170, 1)" inputStyle={{ marginLeft: 10, color: "white" }} autoCapitalize="none" autoCorrect={false} keyboardAppearance="light" keyboardType="email-address" returnKeyType="next" ref={input => (this.email2Input = input)} onSubmitEditing={() => {
                this.password2Input.focus();
              }} blurOnSubmit={false} />
            <Input inputContainerStyle={{ borderRadius: 40, borderWidth: 1, borderColor: "rgba(110, 120, 170, 1)", height: 50, width: SCREEN_WIDTH - 50, marginVertical: 10 }} leftIcon={<SimpleIcon name="lock" color="rgba(110, 120, 170, 1)" size={25} />} iconContainerStyle={{ marginLeft: 20 }} placeholder="Password" placeholderTextColor="rgba(110, 120, 170, 1)" inputStyle={{ marginLeft: 10, color: "white" }} autoCapitalize="none" keyboardAppearance="light" secureTextEntry={true} autoCorrect={false} keyboardType="default" returnKeyType="next" ref={input => (this.password2Input = input)} onSubmitEditing={() => {
                this.confirmPassword2Input.focus();
              }} blurOnSubmit={false} />
            <Input inputContainerStyle={{ borderRadius: 40, borderWidth: 1, borderColor: "rgba(110, 120, 170, 1)", height: 50, width: SCREEN_WIDTH - 50, marginTop: 10, marginBottom: 30 }} leftIcon={<SimpleIcon name="lock" color="rgba(110, 120, 170, 1)" size={25} />} iconContainerStyle={{ marginLeft: 20 }} placeholder="Confirm Password" placeholderTextColor="rgba(110, 120, 170, 1)" inputStyle={{ marginLeft: 10, color: "white" }} autoCapitalize="none" keyboardAppearance="light" secureTextEntry={true} autoCorrect={false} keyboardType="default" returnKeyType="done" ref={input => (this.confirmPassword2Input = input)} blurOnSubmit={true} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#B46486'
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  triangleLeft: {
    position: 'absolute',
    left: -20,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent'
  },
  triangleRight: {
    position: 'absolute',
    right: -20,
    top: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent'
  },
  inputContainerStyle: {
    marginTop: 16,
    width: '90%',
  },
});

export default InputHome;
