import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class FavouriteScreen extends Component<Props> {
  /**
   * A screen component can set navigation options such as the title.
   */
  static navigationOptions = {
    title: 'Favourite',
  };

  render() {
    return (
      <View style={styles.container}>
        {/* /<Text style={styles.title}>{this.props.navigation.getParam('id')}</Text> */}
        <Text style={styles.title}>Favourite</Text>

        <View style={styles.button}>
          <Button
            title="Favourite"
            onPress={() => {this.props.navigation.navigate('Favourite')}}
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