import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';

class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedIndexes: [0, 2, 3]
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentView}>
          <View style={styles.headerContainer}>
            <Icon color="white" name="rocket" size={62} />
            <Text style={styles.heading}>Buttons</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Button containerStyle={{marginVertical: 10}} />
            <Button
              title='LOG IN'
              buttonStyle={{backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
              containerStyle={{marginVertical: 10, height: 50, width: 250 }}
              titleStyle={{fontWeight: 'bold'}}
            />
            <Button
              title='Log in'
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={{backgroundColor: 'rgba(111, 202, 186, 1)', borderRadius: 5}}
              titleStyle={{fontWeight: 'bold', fontSize: 23}}
              containerStyle={{marginVertical: 10, height: 50, width: 230}}
              onPress={() => console.log('aye')}
              underlayColor="transparent"
            />
            <Button
              title="Add to Cart"
              titleStyle={{fontWeight: 'bold', fontSize: 18}}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              buttonStyle={{borderWidth: 0, borderColor: 'transparent', borderRadius: 20}}
              containerStyle={{marginVertical: 10, height: 40, width: 200}}
              icon={
                <Icon
                  name='arrow-right'
                  size={15}
                  color='white'
                />
              }
              iconRight
              iconContainerStyle={{marginLeft: 5}}
            />
            <Button
              title="Request an agent"
              titleStyle={{fontWeight: '500'}}
              buttonStyle={{backgroundColor: 'rgba(199, 43, 98, 1)', borderColor: 'transparent', borderWidth: 0}}
              containerStyle={{marginTop: 10, width: 275, height: 45}}
            />
            <Button
              title="SIGN UP"
              disabled={true}
              titleStyle={{fontWeight: '700'}}
              buttonStyle={{backgroundColor: 'rgba(92, 99,216, 1)', borderColor: 'transparent', borderWidth: 0, borderRadius: 5}}
              containerStyle={{marginTop: 20, width: 300, height: 45}}
            />
            <Button
              title="SIGN UP"
              loading={true}
              loadingProps={{size: 'large', color: 'rgba(111, 202, 186, 1)'}}
              titleStyle={{fontWeight: '700'}}
              buttonStyle={{backgroundColor: 'rgba(92, 99,216, 1)', borderColor: 'transparent', borderWidth: 0, borderRadius: 5, paddingVertical: 10}}
              containerStyle={{marginTop: 20, width: 300, height: 45}}
            />
            <View style={styles.buttonsContainer}>
              <Button
                title="HOME"
                icon={
                  <Icon
                    name='home'
                    size={15}
                    color='white'
                  />
                }
                iconContainerStyle={{marginRight: 10}}
                titleStyle={{fontWeight: '700'}}
                buttonStyle={{backgroundColor: 'rgba(90, 154, 230, 1)', borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
                containerStyle={{width: 130}}
              />
              <Button
                title="PROFILE"
                icon={
                  <Icon
                    name='user'
                    size={15}
                    color='white'
                  />
                }
                iconRight
                iconContainerStyle={{marginLeft: 10}}
                titleStyle={{fontWeight: '700'}}
                buttonStyle={{backgroundColor: 'rgba(199, 43, 98, 1)', borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
                containerStyle={{width: 150}}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                title="Basic Button"
                buttonStyle={{backgroundColor: 'rgba(78, 116, 289, 1)', borderRadius: 3}}
              />
              <Button
                title="Outline Button"
                buttonStyle={{backgroundColor: 'white', borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 1}}
                titleStyle={{color: 'rgba(78, 116, 289, 1)'}}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                title="HOME"
                loading
                titleStyle={{fontWeight: '700'}}
                buttonStyle={{backgroundColor: 'rgba(111, 202, 186, 1)', borderColor: 'transparent', borderWidth: 0, borderRadius: 30, paddingVertical: 10}}
                containerStyle={{width: 100, height: 40}}
              />
              <Button
                title="Clear Button"
                clear
                titleStyle={{color: 'rgba(78, 116, 289, 1)'}}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                title="Light"
                buttonStyle={{backgroundColor: 'rgba(244, 244, 244, 1)', borderRadius: 3}}
                containerStyle={{height: 40}}
                titleStyle={{marginHorizontal: 20, color: 'black'}}
              />
              <Button
                title="Dark"
                buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
                containerStyle={{height: 40}}
                titleStyle={{color: 'white', marginHorizontal: 20}}
              />
              <Button
                title="Default"
                containerStyle={{height: 40}}
                buttonStyle={{backgroundColor: 'rgba(78, 116, 289, 1)'}}
                titleStyle={{color: 'white', marginHorizontal: 20}}
              />
            </View>
            <View style={[styles.buttonsContainer, { marginBottom: 20 }]}>
              <Button
                title="Secondary"
                buttonStyle={{backgroundColor: 'rgba(127, 220, 103, 1)'}}
                containerStyle={{height: 40}}
                titleStyle={{color: 'white', marginHorizontal: 20}}
              />
              <Button
                title="Danger"
                buttonStyle={{backgroundColor: 'rgba(214, 61, 57, 1)'}}
                containerStyle={{height: 40}}
                titleStyle={{color: 'white', marginHorizontal: 20}}
              />
            </View>
          </View>
          <View style={[styles.headerContainer, { backgroundColor: '#292C44'}]}>
            <Icon color="white" name="wrench" size={62} />
            <Text style={styles.heading}>Button Groups</Text>
          </View>
          <ButtonGroup
            buttons={['SIMPLE', 'BUTTON', 'GROUP']}
            selectedIndex={this.state.selectedIndex}
            onPress={selectedIndex => {
              this.setState({ selectedIndex });
            }}
            containerStyle={{ marginBottom: 20 }}
          />
          <ButtonGroup
            buttons={['Multiple', 'Select', 'Button', 'Group']}
            selectMultiple
            selectedIndexes={this.state.selectedIndexes}
            onPress={selectedIndexes => {
              this.setState({ selectedIndexes });
            }}
            containerStyle={{ marginBottom: 20 }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#4F80E1',
    marginBottom: 20
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
});

export default Buttons;
