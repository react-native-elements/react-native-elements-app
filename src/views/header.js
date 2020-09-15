import React, { useReducer } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header as HeaderRNE } from 'react-native-elements';
import { ThemeReducerContext } from '../helpers/ThemeReducer';

function Header(props) {
  const navigation = useNavigation();
  const { ThemeState, dispatch } = React.useContext(ThemeReducerContext);
  return (
    <HeaderRNE
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: navigation.openDrawer,
      }}
      centerComponent={{ text: props.title, style: styles.heading }}
      rightComponent={
        <Switch
          value={ThemeState.themeMode === 'dark'}
          onValueChange={(val) => {
            if (val === true) {
              dispatch({ type: 'set-theme', payload: 'dark' });
            } else {
              dispatch({ type: 'set-theme', payload: 'light' });
            }
          }}
        />
      }
    />
  );
}

function SubHeader({ icon, iconType, title }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#ED553B',
    marginBottom: 20,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export { Header, SubHeader };
