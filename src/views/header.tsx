import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Header as HeaderRNE } from 'react-native-elements';

type HeaderComponentProps = {
  title: string;
};

type ParamList = {
  Detail: {
    openDrawer: void;
  };
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamList, 'Detail'>>();

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
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export { Header, SubHeader };
