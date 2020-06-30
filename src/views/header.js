import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header as HeaderRNE } from 'react-native-elements';

function Header(props) {
  const navigation = useNavigation();

  return (
    <HeaderRNE
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: navigation.openDrawer,
      }}
      centerComponent={{ text: props.title, style: styles.heading }}
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
