import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header as HeaderRNE, HeaderProps } from 'react-native-elements';

type HeaderComponentProps = {
  title: string;
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
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
};

type SubHeaderProps = {
  title: string;
};

const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED553B',
    marginBottom: 20,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export { Header, SubHeader };
