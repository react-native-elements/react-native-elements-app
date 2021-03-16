import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header as HeaderRNE } from "react-native-elements";

const Header = props => {
  const navigation = useNavigation();
  return (
    <HeaderRNE
      leftComponent={{
        icon: "menu",
        color: "#fff",
        onPress: navigation.openDrawer
      }}
      centerComponent={{ text: props.title, style: styles.heading }}
    />
  );
};
 type SubHeaderProps  = {
   title:string;
 }

const SubHeader = ({ icon, iconType, title }:SubHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#ED553B",
    marginBottom: 20
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold"
  }
});

export { Header, SubHeader };
