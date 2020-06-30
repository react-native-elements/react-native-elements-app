import React, { useState } from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';

import { LinearGradient } from '../components/LinearGradient';

import { Header } from './header';

import colors from '../config/colors';

const log = () => console.log('this is an example method');

const list1 = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
  },
];

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    linearGradientColors: ['#3F51B5', '#2196F3'],
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    name: 'Christy Thomas',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    name: 'Melissa Jones',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
];

const Lists2 = () => {
  const renderRow = ({ item }) => {
    return (
      <ListItem
        onPress={log}
        title={item.title}
        leftIcon={{ name: item.icon }}
        chevron
        bottomDivider
      />
    );
  };

  const [switch1, setSwitch1] = useState(true);
  const [checkbox1, setCheckbox1] = useState(true);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  return (
    <>
      <Header title="Lists 2" />
      <FlatList
        ListHeaderComponent={
          <>
            <View style={{ backgroundColor: '#ECEFF1', paddingVertical: 8 }}>
              {list2.map((l, i) => (
                <ListItem
                  component={TouchableScale}
                  friction={90}
                  tension={100}
                  activeScale={0.95}
                  leftAvatar={{ rounded: true, source: { uri: l.avatar_url } }}
                  key={i}
                  linearGradientProps={{
                    colors: l.linearGradientColors,
                    start: [1, 0],
                    end: [0.2, 0],
                  }}
                  ViewComponent={LinearGradient}
                  title={l.name}
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  subtitleStyle={{ color: 'white' }}
                  subtitle={l.subtitle}
                  chevronColor="white"
                  chevron
                  containerStyle={{
                    marginHorizontal: 16,
                    marginVertical: 8,
                    borderRadius: 8,
                  }}
                />
              ))}
            </View>

            <View style={styles.list}>
              {list2.map((l, i) => (
                <ListItem
                  leftAvatar={{
                    title: l.name[0],
                    source: { uri: l.avatar_url },
                  }}
                  key={i}
                  onPress={log}
                  title={l.name}
                  subtitle={l.subtitle}
                  chevron
                  bottomDivider
                />
              ))}
            </View>
            <View style={styles.list}>
              {list2.map((l, i) => (
                <ListItem
                  key={i}
                  leftIcon={{
                    name: 'user-circle-o',
                    type: 'font-awesome',
                    color: 'blue',
                  }}
                  title={l.name}
                  titleStyle={{ color: 'red' }}
                  subtitle={l.subtitle}
                  rightTitle="11:00am"
                  rightTitleStyle={{ color: 'green' }}
                  rightSubtitle="12:00am"
                  bottomDivider
                />
              ))}
            </View>
            <View style={styles.list}>
              <ListItem
                title="Name"
                input={{ placeholder: 'Type your name' }}
                chevron
                bottomDivider
              />
              <ListItem
                title="Switch that please 😲"
                switch={{
                  value: switch1,
                  onValueChange: (value) => setSwitch1(value),
                }}
                bottomDivider
              />
              <ListItem
                title="Choose 🤯"
                buttonGroup={{
                  buttons: ['Flower', 'Coco'],
                  selectedIndex: selectedButtonIndex,
                  onPress: (index) => setSelectedButtonIndex(index),
                }}
                bottomDivider
              />
              <ListItem
                title="Check that please 😢"
                checkBox={{
                  checked: checkbox1,
                  onPress: () => setCheckbox1(!checkbox1),
                }}
                bottomDivider
              />
              <ListItem
                title="With a Badge ! 😻"
                badge={{ value: '12' }}
                bottomDivider
              />
              <ListItem
                title="This thing is checked 😎"
                checkmark
                bottomDivider
              />
            </View>
            <View style={styles.list}>
              <ListItem
                title="Limited supply! Its like digital gold!"
                subtitle={
                  <View style={styles.subtitleView}>
                    <Image
                      source={require('../images/rating.png')}
                      style={styles.ratingImage}
                    />
                    <Text style={styles.ratingText}>5 months ago</Text>
                  </View>
                }
                leftAvatar={{
                  source: require('../../assets/images/avatar1.jpg'),
                }}
              />
            </View>
          </>
        }
        data={list1}
        keyExtractor={(a) => a.title}
        renderItem={renderRow}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: '#fff',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});

export default Lists2;
