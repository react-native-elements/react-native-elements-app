import React from 'react';
import { View, StyleSheet, SectionList } from 'react-native';

import { ListItem, Divider } from 'react-native-elements';

const sections = [
  {
    data: [
      {
        title: 'Airplane Mode',
        icon: 'ios-plane',
        backgroundColor: '#f09628',
        hideDisclosure: true,
        checkbox: true,
      },
      {
        title: 'Wi-Fi',
        backgroundColor: '#147dfa',
        icon: 'ios-wifi',
      },
      {
        title: 'Bluetooth',
        backgroundColor: '#147dfa',
        icon: 'ios-bluetooth',
        rightTitle: 'Off',
      },
      {
        title: 'Cellular',
        backgroundColor: '#147dfa',
        icon: 'ios-bluetooth',
      },
      {
        title: 'Personal Hotspot',
        backgroundColor: '#50dc64',
        icon: 'ios-bluetooth',
        rightTitle: 'Off',
      },
    ],
  },
];

export default class Settings extends React.PureComponent {
  renderItem = ({
    item: { title, backgroundColor, icon, rightTitle, hideDisclosure, checkbox },
  }) => (
    <ListItem
      containerStyle={{ paddingVertical: 8 }}
      switchProps={checkbox && {}}
      key={title}
      disclosure={!hideDisclosure}
      rightTitle={rightTitle}
      icon={{
        type: 'ionicon',
        name: icon,
        size: 20,
        color: 'white',
        containerStyle: { backgroundColor, width: 28, height: 28, borderRadius: 6 },
      }}
      title={title}
    />
  );

  renderSectionHeader = () => <View style={{ height: 40 }} />;

  ItemSeparatorComponent = () => <Divider style={{ marginLeft: 58 }} />;

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={sections}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          ItemSeparatorComponent={this.ItemSeparatorComponent}
          SectionSeparatorComponent={Divider}
          stickySectionHeadersEnabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4',
  },
});
