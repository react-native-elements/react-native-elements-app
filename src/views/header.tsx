import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Header as HeaderRNE, HeaderProps } from 'react-native-elements';

type HeaderComponentProps = {
  title: string;
  containerStyle?: object;
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
      containerStyle={props.containerStyle}
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: navigation.openDrawer,
      }}
      centerComponent={{
        text: props.title,
        style: styles.heading,
      }}
    />
  );
};

type SubHeaderProps = {
  title: string;
  containerStyle?: object;
};

const SubHeader = ({ title, containerStyle }: SubHeaderProps) => {

  return (
    <View style={[styles.headerContainer, containerStyle]}>
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
    width: '100%',
    paddingVertical: 10,

  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export { Header, SubHeader };
