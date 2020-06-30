import React from 'react';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';
import { Avatar } from 'react-native-elements';

import { Header } from './header';

const dataList = [
  {
    image_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    icon: null,
    title: null,
  },
  {
    image_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    icon: null,
    title: null,
  },
  {
    image_url: null,
    icon: null,
    title: 'LR',
  },
  {
    image_url: null,
    icon: { name: 'user', type: 'font-awesome' },
    title: null,
  },
  {
    image_url: null,
    icon: { name: 'user-female', type: 'simple-line-icon' },
    title: null,
  },
  {
    image_url: null,
    icon: { name: 'baidu', type: 'entypo' },
    title: null,
  },
];

const Avatars = () => {
  return (
    <>
      <Header title="Avatars" />
      <ScrollView>
        {_.chunk(dataList, 3).map((chunk, chunkIndex) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              backgroundColor: 'grey',
            }}
            key={chunkIndex}
          >
            {chunk.map((l, i) => (
              <Avatar
                size={64}
                rounded
                source={l.image_url ? { uri: l.image_url } : null}
                icon={l.icon}
                title={l.title}
                key={`${chunkIndex}-${i}`}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Avatars;
