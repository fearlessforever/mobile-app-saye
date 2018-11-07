import React, { Component } from 'react'
import { View, Image , StyleSheet } from 'react-native'


export default class Loader extends Component{
  static navigationOptions ={
    header:null
  }
  render(){
    return(
      <View style={styles.container} > 
        <Image loadingIndicatorSource={require('../assets/jg.png')} source={require('../assets/jg.png') }  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
});
