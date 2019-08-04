import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

export default class ProfileScreen extends Component<Props> {
  /**
   * A screen component can set navigation options such as the title.
   */
  constructor(props){
    super(props);
    this.state = {
      id : 1,
    }
  }
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Home
        </Text>
        <View style={styles.button}>
          <Button
            title="Chicken"
            onPress={() => {this.props.navigation.navigate('Chicken', {id: this.state.id})}}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Duck"

          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  button: {
      margin: 10,
  }
});