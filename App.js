/**
 * Modal App React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Modal from 'react-native-modalbox';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.modal1 = React.createRef();
    this.modal2 = React.createRef();
  }

  state = {
    isOpen: false
  };

  onClose = () => {
    console.log('modal is closed (onClose)');
  }

  onOpen = () => {
    console.log('modal is opened (onOpen)');
  }

  openModal1 = () => {
    this.modal1.current.open();
    console.log('modal is opened (openModal1)');
  }

  openModal2 = () => {
    // can't use onOpen on all modals defined inside same component as all of them will
    // open at once. using {this.state} instead
    this.setState({ isOpen: true });
    console.log('modal is opened (openModal2)');
  }

  onCloseModal2 = () => {
    // can't use onOpen on all modals defined inside same component as all of them will
    // open at once. using {this.state} instead
    this.setState({ isOpen: false });
    console.log('modal is closed (onCloseModal2)');
  }

  renderModal1 = () => {
    return(
      <Modal style={[styles.modal, styles.modal1]} ref={this.modal1} onClosed={this.onClose} onOpened={this.onOpen}>
        <Text style={styles.modalText}>Hello from Modal 1</Text>
      </Modal>
    )
  }

  renderModal2 = () => {
    return(
      <Modal style={[styles.modal, styles.modal2]} ref={this.modal2} position={'bottom'} onClosed={this.onCloseModal2} isOpen={this.state.isOpen}>
        <Text style={styles.modalText}>Hello from Modal 2</Text>
      
        <TouchableOpacity onPress={() => this.setState({isOpen: false})} style={styles.button}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </Modal>
    )
  }

  render = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openModal1} style={styles.button}>
          <Text style={styles.buttonText}>Open Modal 1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.openModal2} style={styles.button}>
          <Text style={styles.buttonText}>Open Modal 2</Text>
        </TouchableOpacity>
      
        {this.renderModal1()}
        {this.renderModal2()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  modal: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal1: {
    height: 200,
    backgroundColor: "#4AC9B0"
  },
  modal2: {
    height: 300,
    backgroundColor: "#6CCEFF"
  },
  modalText: {
    fontSize: 25,
    padding: 10,
    color: '#474747'
  },
  button: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 30,
    color: '#fff'
  }
});

// npx react-native init MyApp
// npm install react-native-modalbox --save
