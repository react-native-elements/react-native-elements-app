import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Tile } from 'react-native-elements';

import { Header } from './header';

const Tiles = () => {
  return (
    <>
      <Header title="Tiles" />
      <View style={{ alignItems: 'center' }}>
        <ScrollView>
          <Tile
            imageSrc={{
              uri:
                'https://images.squarespace-cdn.com/content/v1/5477887ae4b07c97883111ab/1474363728860-6JTDG9X57ZWV4GPF22SB/ke17ZwdGBToddI8pDm48kCODrNtbcuYH7-tCzItriTR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0geeCvn1f36QDdcifB7yxGil1S52LO7OFJ9VSg5prgfv6LcGlOWReXeb5jU_5wp_mQ/Porthmeor+Sunset+21.jpg?format=300w',
            }}
            title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
            titleStyle={{ fontSize: 20 }}
            featured
            caption="Mahatma Gandhi"
            activeOpacity={1}
            width={310}
          />
          <View style={{ paddingTop: 20 }}>
            <Tile
              imageSrc={{
                uri:
                  'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              icon={{
                name: 'heart',
                type: 'font-awesome',
                size: 60,
                color: 'red',
              }}
              featured
              activeOpacity={0.8}
              onPress={() => {
                'Tile pressed';
              }}
              width={310}
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <Tile
              imageSrc={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
              }}
              title="Half Dome, Yosemite"
              titleStyle={{ fontSize: 20 }}
              activeOpacity={1}
              width={310}
              contentContainerStyle={{ height: 70 }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{ color: 'green' }}>Visit</Text>
                <Text style={{ color: 'blue' }}>Find out More</Text>
              </View>
            </Tile>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Tiles;
