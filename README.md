![React Native Elements App](https://user-images.githubusercontent.com/5962998/37248832-a7060286-24b1-11e8-94a8-847ab6ded4ec.png)

# React Native Elements App

This is the Demo app for [React Native Elements](https://github.com/react-native-training/react-native-elements) built with [Expo](https://expo.io/). In this app you will find examples on on how to use various RNE components as well as production-ready screens.

This app also work on the `web` platform using [React Native Web](). You can checkout the [live website here](). If you are looking to build a React Native mobile app & also reuse the code to deploy on web, this repo can be used as a great starting point.

Also the RNE team runs and maintains this project, so if you need any help developing your app with React Native Elements, someone on our team can help you out as well. Feel free to reach out to [@monte9]().

## Demo

**[Mobile App](https://expo.io/@monte9/react-native-elements-app)** | **[Web App]()**

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

3. Run the mobile app (uses [Expo]())

```
# Install the expo-cli
npm install -g expo-cli

yarn native || npm run native
```

4. Run the web app (uses [CRA]())

```
yarn web || npm run web
```

### Deploying it

1. The web app is built using CRA and hosted on Github Pages. You can deploy the app using:

```
yarn deploy
```

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

- @oxyii 💪🏼
- @xavier-villelegier 🔥
- @martinezguillaume 🎸
- @iRoachie 💯
- @monte9 🤓

## React Native Elements

This app is built using [React Native Elements](). RNE is a UI toolkit for React Native that provides you with production ready UI components so that you can focus on building the part that makes your app unique as opposed to reinvent the UI wheel.

You can install `react-native-elements` in your app using:

```
yarn add react-native-elements || npm install react-native-elements --save
```

## Feedback

In case you run into any problems while running this app or have additional questions, please create a new issue on this repo and we will follow up with you.
