import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import { Header, SubHeader } from './header';

const BadgedIcon = withBadge(5)(Icon)

const badgeComponent = () => {
  return (
    <>
      <Header title="Badge" />
      <SubHeader title={'Standard Badge'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 40,
        }}>
        <Badge value="3" status="success" />
        <Badge value="99+" status="error" />
        <Badge value="5" status="primary" />
        <Badge value="10" status="warning" />
      </View>
      <SubHeader title={'Mini Badge'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="primary" />
        <Badge status="warning" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}>
        <Text style={{color: '#397af8', paddingVertical: 10}}>Success</Text>
        <Text style={{color: '#397af8', paddingVertical: 10}}>Error</Text>
        <Text style={{color: '#397af8', paddingVertical: 10}}>Primary</Text>
        <Text style={{color: '#397af8', paddingVertical: 10}}>Warning</Text>
      </View>
    
      <SubHeader title={'Badge as Indicator'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 40,
        }}>
        <Avatar
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg',}}
          size="large"
        />
        <Badge
          status="success"
          containerStyle={{ position: 'absolute', top: 5, left: 100}}
        />
        <Avatar
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/women/40.jpg',}}
          size="large"
        />
        <Badge
          status="error"
          value={2}
          containerStyle={{ position: 'absolute', top: 5, left: 255}}
        />
        <BadgedIcon type="ionicon" name="ios-chatbubbles" />
      </View>
    </>
  );
};

export default badgeComponent;