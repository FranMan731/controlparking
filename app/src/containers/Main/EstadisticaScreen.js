import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/common/Header';

export default class EstadisticaScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor, focused}) => (
      <Icon
        name={focused ? 'ios-person' : 'md-person'}
        color={tintColor}
        size={25}
      />
    ),
  };

  render() {
    return (
      <View>
        <Header titulo="Estadisticas" />
        <Text> This is Stats Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
