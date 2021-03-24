import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';
import { Avatar } from 'react-native-elements';
import { Header, SubHeader } from './header';

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
    image_url:
      'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
    icon: null,
    title: null,
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
    icon: null,
    title: null,
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
    icon: null,
    title: null,
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2016/11/22/21/42/adult-1850703__340.jpg',
    icon: null,
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
        <SubHeader title={'Photo Avatars'} />
        {_.chunk(dataList, 3).map((chunk, chunkIndex) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 30,
            }}
            key={chunkIndex}
          >
            {chunk.map((l, i) => (
              <Avatar
                size={64}
                rounded
                source={l.image_url ? { uri: l.image_url } : null}
                title={l.title}
                key={`${chunkIndex}-${i}`}
              />
            ))}
          </View>
        ))}
        <SubHeader title={'Icon Avatars'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}
        >
          <Avatar
            size={64}
            rounded
            icon={{ name: 'pencil', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#6733b9' }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'rowing' }}
            containerStyle={{ backgroundColor: '#00a7f7' }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'heartbeat', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#eb1561' }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 31,
          }}
        >
          <Avatar
            size={64}
            rounded
            icon={{
              name: 'extension',
              type: 'material',
              color: '#cdde20',
            }}
            containerStyle={{
              borderColor: 'grey',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'apartment', type: 'material', color: '#009688' }}
            containerStyle={{
              borderColor: 'grey',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'backup', type: 'material', color: '#ff5606' }}
            containerStyle={{
              borderColor: 'grey',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
        </View>

        <SubHeader title={'Letter Avatars'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}
        >
          <Avatar
            size={64}
            rounded
            title="Fc"
            containerStyle={{ backgroundColor: '#3d4db7' }}
          />
          <Avatar
            size={64}
            rounded
            title="P"
            containerStyle={{ backgroundColor: 'coral' }}
          />
          <Avatar
            size={64}
            rounded
            title="Rd"
            containerStyle={{ backgroundColor: 'purple' }}
          />
        </View>

        <SubHeader title={'Badged Avatars'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 40,
          }}
        >
          <Avatar
            size={64}
            rounded
            icon={{ name: 'adb', type: 'material' }}
            containerStyle={{ backgroundColor: 'orange' }}
          >
            <Avatar.Accessory size={24} />
          </Avatar>
          <Avatar
            size={64}
            rounded
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2020/06/03/14/53/girl-5255195__340.jpg',
            }}
            title="Bj"
            containerStyle={{ backgroundColor: 'grey' }}
          >
            <Avatar.Accessory size={23} />
          </Avatar>
        </View>
      </ScrollView>
    </>
  );
};

export default Avatars;
