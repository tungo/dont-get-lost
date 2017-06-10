import {Actions, Scene} from 'react-native-router-flux';
import React, {Component} from 'react';
import { View, Button, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class GroupIndexItem extends Component {
  render() {
    return (
      <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.button}>
          {this.props.group.group_name}
          </Text>
        </View>
    </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74B530',
    width: 200,
    height: 60,
    margin: 10,
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
  },
  button: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
    fontSize: 16
  }
});
