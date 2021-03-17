import React from 'react';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';
import { SocialIcon, SocialIconProps } from 'react-native-elements';
import { Header } from './header';

const dataList = [
  {
    type: 'facebook',
  },
  {
    type: 'twitter',
  },
  {
    type: 'google-plus-official',
  },
  {
    type: 'google',
  },
  {
    type: 'pinterest',
  },
  {
    type: 'linkedin',
  },
  {
    type: 'youtube',
  },
  {
    type: 'vimeo',
  },
  {
    type: 'tumblr',
  },
  {
    type: 'instagram',
  },
  {
    type: 'quora',
  },
  {
    type: 'flickr',
  },
  {
    type: 'foursquare',
  },
  {
    type: 'wordpress',
  },
  {
    type: 'stumbleupon',
  },
  {
    type: 'github',
  },
  {
    type: 'github-alt',
  },
  {
    type: 'twitch',
  },
  {
    type: 'medium',
  },
  {
    type: 'soundcloud',
  },
  {
    type: 'stack-overflow',
  },
  {
    type: 'gitlab',
  },
  {
    type: 'angellist',
  },
  {
    type: 'codepen',
  },
  {
    type: 'weibo',
  },
  {
    type: 'vk',
  },
  {
    type: 'facebook-messenger',
    iconType: 'material-community',
  },
  {
    type: 'whatsapp',
  },
];

type SocialIconsComponentProps = {};

const SocialIcons: React.FunctionComponent<SocialIconsComponentProps> = () => {
  const socialProps = {};
  return (
    <>
      <Header title="Social Icons" />
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
              <SocialIcon
                {...(socialProps as SocialIconProps)}
                type={l.type}
                key={`${chunkIndex}-${i}`}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default SocialIcons;
