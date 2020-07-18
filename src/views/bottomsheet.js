import React from 'react';
import { Header } from './header';
import { BottomSheet } from 'react-native-elements';

export default () => {
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
    },
  ];
  return (
    <>
      <Header title="BottomSheet" />
      <BottomSheet
        list={list}
        cancelButtonIndex={2}
        buttonProps={{ title: 'Open Buttom Sheet' }}
      />
    </>
  );
};
