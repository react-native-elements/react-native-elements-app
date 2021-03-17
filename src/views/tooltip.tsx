import React from 'react';
import { Tooltip, Text } from 'react-native-elements';
import { Header } from './header';
import { View, StyleSheet, Dimensions } from 'react-native';
import colors from '../config/colors';

const { height } = Dimensions.get('window');

const TooltipComponent = () => {
  return (
    <>
      <Header title="Tooltip" />
      <View style={{ marginVertical: height / 8 }}>
        <View style={styles.view}>
          <Tooltip popover={<Text>Hey there!</Text>} withPointer={false}>
            <Text>Without caret</Text>
          </Tooltip>
          <Tooltip
            popover={<Text>Tooltip info goes here</Text>}
            containerStyle={{ width: 150, height: 60 }}
            backgroundColor={colors.primary}
          >
            <Text>Press me</Text>
          </Tooltip>
        </View>
        <View style={styles.view}>
          <Tooltip
            backgroundColor={colors.secondary}
            popover={
              <Text>Tooltip info goes here too. Find tooltip everywhere</Text>
            }
            containerStyle={{ width: 200, height: 60 }}
          >
            <Text>Press me</Text>
          </Tooltip>
          <Tooltip
            pointerColor={colors.primary}
            popover={<Text>Tooltip info goes here too.</Text>}
            containerStyle={{ width: 150, height: 60 }}
          >
            <Text>Huge</Text>
          </Tooltip>
        </View>
        <View style={styles.view}>
          <Tooltip width={200} popover={<Text>Tooltip info goes here</Text>}>
            <Text>More attention</Text>
          </Tooltip>
        </View>
        <View style={styles.view}>
          <Tooltip width={200} popover={<Text>Tooltip info goes here</Text>}>
            <Text>I'm Different</Text>
          </Tooltip>
          <Tooltip width={200} popover={<Text>Tooltip info goes here</Text>}>
            <Text>Press me</Text>
          </Tooltip>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 50,
  },
});

export default TooltipComponent;
