import React, {Component} from 'react'
import {Modal, Text, TouchableHighlight, View, Alert , Button} from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Modal',
  };

  state = {
    modalVisible: false,
  };
  componentDidMount(){
    Alert.alert('Modal has been LOADED!.');
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            //Alert.alert('Modal has been closed.');
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Button title="Show Modal"  onPress={() => {
            this.setModalVisible(true);
          }} />
        </TouchableHighlight>
      </View>
    );
  }
}