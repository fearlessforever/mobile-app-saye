import React, {Component} from 'react'
import { View, Text ,Button , Image} from 'react-native' 

export default class Home extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  renderRow(key) {
    return (
        <View key={key} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
            <View style={{ flex: 1, alignSelf: 'stretch' }} >
                <Text>DEh</Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch' }} />
            <View style={{ flex: 1, alignSelf: 'stretch' }} />
            <View style={{ flex: 1, alignSelf: 'stretch' }} />
            <View style={{ flex: 1, alignSelf: 'stretch' }} />
        </View>
    );
}
  render() {
    const data = [1, 2, 3, 4, 5 ];
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {
            data.map((datum) => { // This will render a row for each data element.
                return this.renderRow(datum);
            })
        }
        </View>
    );
  }
}