import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Chip, withTheme } from 'react-native-elements';
import { Header, SubHeader } from './header';

type ChipsComponentProps = {};

const Buttons: React.FunctionComponent<ChipsComponentProps> = () => {

  return (
    <>
      <Header title="Chips" />
      <ScrollView>
        <View style={styles.contentView}>
          <View style={{ alignItems: 'center' }}>
            <Chip
              title={'Solid Chip'}
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title={'Disabled Chip'}
              disabled
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title={'Outlined Chip'}
              type="outline"
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title={'Outlined & Disabled'}
              type="outline"
              disabled
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title={'Left Icon Chip'}
              icon={{
                name: 'bluetooth',
                type: 'font-awesome',
                size: 20,
                color: 'white',
              }}
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title={'Right Icon Chip'}
              icon={{
                name: 'close',
                type: 'font-awesome',
                size: 20,
                color: 'white',
              }}
              iconRight
              containerStyle={{ marginVertical: 15 }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    marginTop: 20,
  },
});

export default withTheme(Buttons, '');
