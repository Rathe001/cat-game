import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
/*
export default class MyThingContainer extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Josh Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu</Text>
      </View>
    );
  }
};*/

export default function MyThingContainer(props: Props) {
    const testing = JSON.stringify(this.state);
    console.log('TEST');
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{testing}</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'white',
  },
});
