import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, withTheme } from 'react-native-elements';
import { Header, SubHeader } from './header';

type ChipsComponentProps = {};

const Buttons: React.FunctionComponent<ChipsComponentProps> = () => {

  return (
    <>
      <Header title="Chips" />
      <ScrollView>
        <View style={styles.contentView}>
          <View style={{ alignItems: 'center' }}>
            <Button
              title={'Test Chip'}
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
});

export default withTheme(Buttons, '');
