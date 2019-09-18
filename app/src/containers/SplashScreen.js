import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from 'react-native-ui-kitten';

export class SplashScreen extends Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Text style={styles.text} category="h1">
          Bienvenidos a EstacionarApp
        </Text>
        <Text style={styles.text} category="s1">
          Una aplicación que te ayudará al control del estacionamiento
        </Text>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
