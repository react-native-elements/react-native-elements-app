![React Native UI Toolkit](http://i.imgur.com/tqxDeoG.png)

# React Native Elements App

This repo uses React Native Elements as a submodule through `/node_modules/react-native-elements`. Hence once you clone this repo, you can make changes to any RNE `/src` files, test these changes through the expo app and also commit directly to the main RNE repo.

## Expo app

Click here to run the [React Native Elements App](https://expo.io/@monte9/react-native-elements-app) on Expo which uses all of the React Native Elements components.

## Get Started

1. Clone the project

```
git clone https://github.com/react-native-training/react-native-hackathon-starter.git
```

2. Install node_modules

```
npm install
```

3. Verify submodule

```
cd node_modules/react-native-elements

git branch -v (should show rne master branch)
```

3. Open app with [Expo Desktop Client](https://docs.expo.io/versions/v16.0.0/index.html)
  - If you have never used Expo before, click [here](https://docs.expo.io/versions/v16.0.0/introduction/installation.html) to install it.
  - Then create a new account on the Expo Desktop client that you just installed. Follow [this](https://docs.expo.io/versions/v16.0.0/guides/up-and-running.html#create-an-account) if you need help.
  - Then click `Project` -> `Open Project` and select the examples folder from Step 2 above.
  - Finally run the app on simulator or your device.

## Docs

Click [here](https://react-native-training.github.io/react-native-elements/API/buttons/) to view the docs for React Native Elements.
