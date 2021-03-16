import React, { useState } from 'react';
import { Header } from './header';
import { BottomSheet, Button, ListItem } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export interface Props {}

const BottomSheetComponent: React.FC<Props> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <>
      <Header title="BottomSheet" />
      <Button
        title="Open Buttom Sheet"
        onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}
      />
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default BottomSheetComponent;
