import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Layout, Text, Input, Button} from 'react-native-ui-kitten';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class SingInComponent extends Component {
  render() {
    const {handleChangeText, usuario, password, onPress} = this.props;

    return (
      <KeyboardAwareScrollView
        bounces={false}
        bouncesZoom={false}
        alwaysBounceVertical={false}
        alwaysBounceHorizontal={false}
        style={styles.containerScroll}
        contentContainerStyle={styles.contentContainerScroll}
        enableOnAndroid={true}>
        <Layout>
          <ImageBackground
            style={styles.backgroundImage}
            source={require('../../../assets/images/bg-1.jpg')}>
            <View style={styles.container}>
              <View style={styles.signInContainer}>
                <Text style={styles.signInLabel} category="h2">
                  CONTROL PARKING
                </Text>
                <View style={styles.containerLogo}>
                  <View style={styles.logo} />
                </View>
              </View>
              <View style={styles.form1}>
                <Input
                  size="small"
                  placeholder="Ingrese email"
                  style={styles.inputForm}
                  value={usuario}
                  textStyle={styles.textInput}
                  onChangeText={text => handleChangeText('usuario', text)}
                />
                <Input
                  size="small"
                  placeholder="Ingrese password"
                  style={styles.inputForm}
                  textStyle={styles.textInput}
                  labelStyle={styles.labelInput}
                  value={password}
                  onChangeText={text => handleChangeText('password', text)}
                />
                <Button status="primary" size="large" onPress={() => onPress()}>
                  Ingresar
                </Button>
              </View>
            </View>
          </ImageBackground>
        </Layout>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
  },
  contentContainerScroll: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 16,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  signInContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 24,
  },
  signInLabel: {
    color: 'white',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  form1: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputForm: {
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  textInput: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  labelInput: {
    color: 'white',
  }
});
