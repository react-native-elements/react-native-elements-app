import React, { useContext } from 'react';
import {
  View,
  ScrollView,
  Text,
  Animated,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Avatar, FAB, Icon, ListItem } from 'react-native-elements';
import { ThemeReducerContext } from '../helpers/ThemeReducer';


const WhatsappClone: React.FunctionComponent = () => {
  const { current: offset } = React.useRef(new Animated.Value(0));
  const { ThemeState } = useContext(ThemeReducerContext);

  return (
    <>
      <Animated.View
        style={{
          transform: [
            {
              translateY: offset.interpolate({
                inputRange: [0, 300, 301],
                outputRange: [0, -45, -45],
              }),
            },
          ],
        }}
      >
        <SafeAreaView style={styles.safeArea}>
          <Animated.View
            style={[
              styles.header1,
              {
                opacity: offset.interpolate({
                  inputRange: [0, 150, 301],
                  outputRange: [1, 0, 0],
                }),
              },
            ]}
          >
            <Text style={{ color: '#fff', fontSize: 20, flexGrow: 1 }}>
              WhatsApp
            </Text>
            <Icon name="search" color="white" style={styles.icon} />
            <Icon
              name="md-ellipsis-vertical"
              style={styles.icon}
              type="ionicon"
              color="white"
            />
          </Animated.View>
          <View style={styles.header2}>
            <Icon
              name="camera"
              type="ionicon"
              color="white"
              style={styles.icon}
            />
            <Text style={[styles.tabLabel, styles.activeTabLabel]}>CHAT</Text>
            <Text style={styles.tabLabel}>STATUS</Text>
            <Text style={styles.tabLabel}>CALLS</Text>
          </View>
        </SafeAreaView>

        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
        >
          {[...new Array(20)].map((v, i) => (
            <ListItem key={i} bottomDivider onPress={() => {}}>
              <Avatar
                rounded
                size={40}
                source={require('../../assets/images/avatar1.jpg')}
              />
              <ListItem.Content>
                <ListItem.Title>
                  <Text>John Doe</Text>
                </ListItem.Title>
                <View>
                  <Text style={[ThemeState.themeMode === 'dark'? styles.chatOverviewDark: styles.chatOverviewLight]}>
                    You: Oh I am using React Native Elements
                  </Text>
                </View>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </Animated.View>

      <FAB
        icon={{ name: 'chat', color: '#fff' }}
        placement="right"
        color="#25D366"
        style={{
          transform: [
            {
              translateY: offset.interpolate({
                inputRange: [0, 400],
                outputRange: [0, 150],
              }),
            },
          ],
        }}
      />
    </>
  );
};

export default WhatsappClone;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#075E54',
    paddingTop: 30,
  },
  icon: {
    paddingHorizontal: 10,
  },
  header1: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabLabel: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  activeTabLabel: {
    padding: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 4,
  },
  chatOverviewLight: {
    opacity: 0.6,
    fontSize: 12,
    color: 'black'
  },
  chatOverviewDark: {
    opacity: 0.6,
    fontSize: 12,
    color: 'white'
  }
});
