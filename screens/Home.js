import React, {Component} from 'react'
import { View, Text ,Button ,ImageBackground } from 'react-native' 

export default class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  componentWillMount(){
    alert('Peringatan','Okde deh');
  }

  render() {
    return (
      <ImageBackground source={ require('../tes.jpg') } style={{width:'100%',height:'100%'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContentz: 'center' }}>
      <Text>Home Screens</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
          style={{float:'left'}}
        />
        <Text>{"\n"}</Text>
        <Button
          title="Go to Modal"
          onPress={() => this.props.navigation.navigate('Modal')}
        />
        
      </View>
      </ImageBackground>
    );
  }
}