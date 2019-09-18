import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/common/Header';

export default class ControlScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor, focused}) => (
      <Icon
        name={focused ? 'ios-home' : 'md-home'}
        color={tintColor}
        size={25}
      />
    ),
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  onBarSelect = selectedIndex => {
    this.setState({selectedIndex});
  };
  onBarSelect = selectedIndex => {
    this.setState({selectedIndex});
  };

  render() {
    return (
      <View>
        <Header titulo="Control" />
        <Text> Control Screen </Text>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
});
