![React Native Elements App](https://user-images.githubusercontent.com/5962998/37248832-a7060286-24b1-11e8-94a8-847ab6ded4ec.png)

# React Native Elements App

This is the Demo app for [React Native Elements UI kit](https://github.com/react-native-training/react-native-elements) built with [Expo](https://expo.io/). In this app you will find examples on how to use various components as well as Production-ready screens which showcase how to combine multiple components to built entire views in your app.

This repo uses React Native Elements as a submodule through `/node_modules/react-native-elements`. Hence once you clone this repo, you can make changes to any RNE `/src` files, test these changes through this example app and also commit directly to the main RNE repo.

### [Expo App](https://expo.io/@monte9/react-native-elements-app))

## Get Started

1. Clone the project

```
git clone --recursive https://github.com/react-native-training/react-native-elements-app.git
```

2. Install node_modules

```
cd react-native-elements-app && npm install
```

3. Verify submodule

```
cd node_modules/react-native-elements

git branch -v (should show master branch of react-native-elements)
```

3. Open app with [Expo Desktop Client](https://docs.expo.io/versions/v16.0.0/index.html)
  - If you have never used Expo before, click [here](https://docs.expo.io/versions/v16.0.0/introduction/installation.html) to install it.
  - Then create a new account on the Expo Desktop client that you just installed. Follow [this](https://docs.expo.io/versions/v16.0.0/guides/up-and-running.html#create-an-account) if you need help.
  - Then click `Project` -> `Open Project` and select the examples folder from Step 2 above.
  - Finally run the app on simulator or your device.

# 🌮 RNE v1-beta 🍰

## New Features:
- [x] Button component - re-written from scratch [@monte9]
- [x] Input component - re-written from scratch [@monte9 & @xavier-villelegier]
- [ ] Search component - re-written from scratch - Platform specific [@xavier-villelegier]
- [ ] ListItem component - re-written from scratch - Platform specific [@martinezguillaume, @johot]
- [x] Avatar component - refactored with cleaner API [@monte9]
- [x] Production-ready screens - 🔥 💯 🎸  [@monte9, @xavier-villelegier, @martinezguillaume]
- [x] Launching RNE Ecosystem 👍
- [ ] Additional features - WIP

## Release date:
The current plan is to continue development on `v1` until end of November. Please feel free to request new features or let us know what you would like to see improved on `RNE v1`. We also welcome PR's. 🙌

`RNE v1-beta` is slated to release in the second week of December. Since `v1` has a lot of API changes (many of which are breaking changes due to re-written components), we will be releasing  `v1-beta` to give users enough time to migrate their apps to `v1` as well as give us time to iterate on feedback from the community.

The official `v1` will be released in 2018 🎉  around mid-January.

## Major contributors:
- @xavier-villelegier 🔥
- @iRoachie 💯
- @martinezguillaume 🎸
- @johot 🙏

## RNE Ecosystem:
It's a platform that connects small teams/anyone that needs help developing their RN app to open source contributors that are willing to build complex UI screens & animated interactions for 💰. It's built on top of RNE & Open Collective.

If this sounds interesting and you would like to participate, please leave an 👍 on this comment. More details coming soon.

In the meantime, here's a taste of what's to come.

<div style="display: flex; flex-direction: row; margin-bottom: 20px">
<img src="https://user-images.githubusercontent.com/7840686/32702785-b1d9114e-c7a0-11e7-9999-6c6a00d432ec.gif" width="300" />
<img src="https://user-images.githubusercontent.com/7840686/32702789-b6bbdce6-c7a0-11e7-8034-8144274fbdae.gif" width="300" />
</div>
<div style="display: flex; flex-direction: row; margin-top: 20px">
<img src="https://user-images.githubusercontent.com/7840686/32702791-b947eedc-c7a0-11e7-8e8c-7dff1bd80564.gif" width="300" />
</div>
<div style="display: flex; flex-direction: row; margin-top: 20px;">
<img width="324" alt="screen shot 2017-11-12 at 11 51 39 am" src="https://user-images.githubusercontent.com/7840686/32702796-bfd38c8e-c7a0-11e7-8042-06851bdbf0ae.png">
<img src="https://user-images.githubusercontent.com/7840686/32702795-bfbbb3de-c7a0-11e7-8eda-dc10a9406639.png" width="324" />
</div>

## Docs
Click [here](https://react-native-training.github.io/react-native-elements/API/buttons/) to view the docs for React Native Elements.
