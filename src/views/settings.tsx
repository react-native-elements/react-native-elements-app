import React, { useState } from 'react';
import { View, StyleSheet, SectionList, Switch } from 'react-native';
import {
  ListItem,
  Divider,
  SearchBar,
  Icon,
  SearchBarProps,
} from 'react-native-elements';
import { Header } from './header';

const ORANGE = '#FF9500';
const BLUE = '#007AFF';
const GREEN = '#4CD964';
const RED = '#FF3B30';
const GREY = '#8E8E93';
const PURPLE = '#5856D6';
const TEAL_BLUE = '#5AC8FA';
const sections = [
  {
    data: [
      {
        title: 'Airplane Mode',
        icon: 'ios-airplane',
        backgroundColor: ORANGE,
        hideChevron: true,
        checkbox: true,
      },
      {
        title: 'Wi-Fi',
        backgroundColor: BLUE,
        icon: 'ios-wifi',
      },
      {
        title: 'Bluetooth',
        backgroundColor: BLUE,
        icon: 'ios-bluetooth',
        rightTitle: 'Off',
      },
      {
        title: 'Cellular',
        backgroundColor: GREEN,
        icon: 'ios-phone-portrait',
      },
      {
        title: 'Personal Hotspot',
        backgroundColor: GREEN,
        icon: 'ios-radio',
        rightTitle: 'Off',
      },
    ],
  },
  {
    data: [
      {
        title: 'Notifications',
        icon: 'ios-notifications',
        backgroundColor: RED,
      },
      {
        title: 'Control Center',
        backgroundColor: GREY,
        icon: 'ios-switch',
      },
      {
        title: 'Do Not Disturb',
        backgroundColor: PURPLE,
        icon: 'ios-moon',
      },
    ],
  },
  {
    data: [
      {
        title: 'General',
        icon: 'ios-settings',
        backgroundColor: GREY,
      },
      {
        title: 'Display & Brightness',
        backgroundColor: BLUE,
        icon: 'ios-bulb',
      },
      {
        title: 'Wallpaper',
        backgroundColor: TEAL_BLUE,
        icon: 'ios-color-wand',
      },
      {
        title: 'Sounds',
        backgroundColor: RED,
        icon: 'ios-volume-high',
      },
      {
        title: 'Touch ID & Code',
        backgroundColor: RED,
        icon: 'ios-finger-print',
      },
      {
        title: 'Emergency Call',
        backgroundColor: ORANGE,
        icon: 'ios-medical',
      },
      {
        title: 'Battery',
        backgroundColor: GREEN,
        icon: 'ios-battery-full',
      },
      {
        title: 'Confidentiality',
        backgroundColor: GREY,
        icon: 'ios-hand',
      },
    ],
  },
  // Space at the bottom
  { data: [] },
];

type SetttingsComponentProps = {};

const Settings: React.FunctionComponent<SetttingsComponentProps> = () => {
  const [switched, setSwitched] = useState(false);

  const onSwitchEventHandler = (value) => {
    setSwitched(value);
  };

  const searchbarProps = {};

  const renderItem = ({
    item: { title, backgroundColor, icon, rightTitle, hideChevron, checkbox },
  }) => (
    <ListItem containerStyle={{ paddingVertical: 8 }} key={title}>
      <Icon
        type="ionicon"
        name={icon}
        size={20}
        color="white"
        containerStyle={{
          backgroundColor,
          width: 28,
          height: 28,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Title right>{rightTitle}</ListItem.Title>
      </ListItem.Content>
      {!hideChevron && <ListItem.Chevron />}
      {checkbox && (
        <Switch value={switched} onValueChange={onSwitchEventHandler} />
      )}
    </ListItem>
  );

  const renderSectionHeader = () => <View style={styles.headerSection} />;

  const ItemSeparatorComponent = () => (
    <View style={styles.separatorComponent}>
      <Divider style={styles.separator} />
    </View>
  );

  const ListHeaderComponent = () => (
    <View>
      <SearchBar
        {...(searchbarProps as SearchBarProps)}
        platform="ios"
        placeholder="Search"
      />
      <Divider />
    </View>
  );

  const keyExtractor = (item, index) => index;

  return (
    <>
      <Header title="Settings Example" />
      <SectionList
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeaderComponent}
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={ItemSeparatorComponent}
        SectionSeparatorComponent={Divider}
        stickySectionHeadersEnabled={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFF4',
  },
  separatorComponent: {
    backgroundColor: 'white',
  },
  separator: {
    marginLeft: 58,
  },
  headerSection: {
    height: 30,
  },
});

export default Settings;
