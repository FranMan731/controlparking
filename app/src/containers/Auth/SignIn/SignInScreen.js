import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, AsyncStorage} from 'react-native';
import SignInComponent from './SingInComponent';

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: '',
      password: '',
    };

    this.handleChangeText = this.handleChangeText.bind(this);
  }
  static navigationOptions = {
    header: null,
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  handleChangeText = (tipo, text) => {
    this.setState(prevState => ({...prevState, [tipo]: text}));
  };

  render() {
    const {usuario, password} = this.state;
    return (
      <SignInComponent
        handleChangeText={this.handleChangeText}
        usuario={usuario}
        password={password}
        onPress={this._signInAsync}
      />
    );
  }
}

const styles = StyleSheet.create({});
