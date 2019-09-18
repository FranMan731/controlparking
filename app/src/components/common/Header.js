import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: 'Control',
      estilos: {
        backgroundColor: '',
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {titulo} = props;

    return {
      titulo: titulo,
    };
  }

  render() {
    const {titulo} = this.state;

    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{titulo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#689F38',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 60,
    width: '100%',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
