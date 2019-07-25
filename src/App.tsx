import React from 'react';
import {AppLoading} from "./components/AppLoading";
import { View, Text } from 'react-native';
import {cacheAssets,cacheFonts} from "./helpers/AssetsCaching";
import {Button} from 'react-native-elements';


export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheAssets([
      // require("../assets/images/bg_screen1.jpg"),
    ]);

    const fontAssets = cacheFonts({
      // "FontAwesome": require("@expo/vector-icons/fonts/FontAwesome.ttf"),
      // "Ionicons": require("@expo/vector-icons/fonts/Ionicons.ttf"),
      // "Entypo": require("@expo/vector-icons/fonts/Entypo.ttf"),
      // "SimpleLineIcons": require("@expo/vector-icons/fonts/SimpleLineIcons.ttf"),
      // "MaterialIcons": require("@expo/vector-icons/fonts/MaterialIcons.ttf"),
      // //TODO: What's wrong with MaterialCommunityIcons ???
      // "MaterialCommunityIcons": require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf"),
    });

    await Promise.all([imageAssets, fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }

    return (
      <View>
        <Text>Hello</Text>
        <Button title="This is button"/>
      </View>
    );
  }
}
