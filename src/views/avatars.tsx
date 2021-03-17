import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';
import { Avatar } from 'react-native-elements';
import { Header } from './header';

const dataList = [
  {
    image_url: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
    icon: null,
    title: null,
  },
  {
    image_url: 'https://randomuser.me/api/portraits/men/36.jpg',
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

const theme1 = {
  Button: {
    titleStyle: {
      color: 'white',
    },
  },
};

const theme2 = {
  Button: {
    titleStyle: {
      color: 'red',
    },
  },
};

type AvatarComponentProps = {};

const Avatars: React.FunctionComponent<AvatarComponentProps> = () => {
  const [theme, setTheme] = useState(theme1);

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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
            backgroundColor: 'grey',
          }}
        >
          <Avatar
            size={64}
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/women/63.jpg',
            }}
          >
            <Avatar.Accessory size={24} />
          </Avatar>
          <Avatar
            size={64}
            rounded
            icon={{ name: 'user', type: 'font-awesome' }}
          >
            <Avatar.Accessory size={23} />
          </Avatar>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            backgroundColor: 'grey',
          }}
        ></View>
      </ScrollView>
    </>
  );
};

export default Avatars;
