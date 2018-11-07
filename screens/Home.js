import React, {Component} from 'react'
import { View, Text ,Button ,ImageBackground , Alert } from 'react-native' 

export default class Home extends Component {
  static navigationOptions = {
    header:null,
    title:''
  };

  componentWillMount(){
    Alert.alert('Peringatan','Okde deh');
  }

  render() {
    return (
      <ImageBackground source={ require('../assets/logo.2x.png') } style={{alignItems:'stretch',width:'100%',height:'100%'}}>
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