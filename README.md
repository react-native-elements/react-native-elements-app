![React Native Elements App](https://user-images.githubusercontent.com/5962998/37248832-a7060286-24b1-11e8-94a8-847ab6ded4ec.png)

# React Native Elements App

This boilerplate based on the demo app for [React Native Elements](https://github.com/react-native-training/react-native-elements) built with [Expo](https://expo.io/). In this app you will find examples on on how to use various RNE components as well as production-ready screens.

This app also work on the `web` platform using [React Native Web](https://github.com/necolas/react-native-web). You can checkout the [live website here](https://react-native-elements.github.io/react-native-elements-app). If you are looking to build a React Native mobile app & also reuse the code to deploy on web, this repo can be used as a great starting point.


## Demo

**[Mobile App](https://expo.io/@monte9/react-native-elements-app)** | **[Web App](https://react-native-elements.github.io/react-native-elements-app)**

### Run it locally

1. Clone the project

```
git clone https://github.com/react-native-training/react-native-elements-app.git
```

2. Install dependencies

```
cd react-native-elements-app

# Using npm or yarn
yarn || npm install
```

3. Run the mobile app (uses [Expo](https://expo.io/learn))

```
# Install the expo-cli
npm install -g expo-cli

yarn native || npm run native
```

4. Run the web app (uses [CRA](https://facebook.github.io/create-react-app/docs/getting-started))

```
yarn web || npm run web
```

### Deploy Web app

First you must build the web app using:

```
yarn build:web
```

Once you have built it, you can see generated `build` folder.

This folder can be hosted as static website. For example you can publish on [Github Pages](https://pages.github.com/) via [gh-pages](https://github.com/tschaub/gh-pages) cli.

```
yarn deploy
```

**Note:** don't forget to add or change "homepage" key in your package.json

### Ejecting

1. The mobile app is built using Expo. If you would like to eject, you can run the following command:

```
yarn eject:native || npm run eject:native
```

We highly recommend you read the [official Expo ejection docs](https://docs.expo.io/versions/latest/expokit/eject/) before proceeding.

2. The web app is built using Creact React App. If you would like to eject, you can run the following command:

```
yarn eject:web || npm run eject:web
```

We highly recommend you read the [official CRA ejection docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) before proceeding.

## Major contributors:

- [@oxyii](https://github.com/oxyii) 💪🏼
- [@xavier-villelegier](https://github.com/xavier-villelegier) 🔥
- [@martinezguillaume](https://github.com/martinezguillaume) 🎸
- [@iRoachie](https://github.com/iRoachie) 💯
- [@monte9](https://github.com/monte9) 🤓

## React Native Elements

This app is built using [React Native Elements](https://github.com/react-native-training/react-native-elements). RNE is a UI toolkit for React Native that provides you with production ready UI components so that you can focus on building the part that makes your app unique as opposed to reinvent the UI wheel.

You can install `react-native-elements` in your app using:

```
yarn add react-native-elements || npm install react-native-elements --save
```

## Feedback

In case you run into any problems while running this app or have additional questions, please create a new issue on this repo and we will follow up with you.
