import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image , TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class VideoItem extends Component{
  render(){
    let {video} = this.props
    //console.log(video);
    //alert(video.snippet.thumbnails.medium.url);
    //return( <View></View> );
    return(
      <View style={styles.container}>
        <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height:200}} />
        <View style={styles.descContainer}>
          <Image source={require('../assets/user.jpg')} style={{width:50,height:50,borderRadius:25}} />
          <View style={styles.videoDetails}>
            <Text style={styles.videoTitle}>{video.snippet.title}</Text>
            <Text style={styles.videoStats}>{video.snippet.channelTitle} | { nFormatter( Math.floor((Math.random() * 1000000) + 1) ) } views </Text>
            <Text style={styles.videoDesc}>{video.snippet.description} </Text>
          </View>
          <TouchableOpacity >
            <Icon name="more-vert" size={20}/> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:7,
    //backgroundColor:'red'
  },
  descContainer:{
    flexDirection:'row',
    paddingTop:7
  },
  videoTitle:{
    fontSize:17,
    color:'#3c3c3c'
  },
  videoDetails:{
    paddingHorizontal:5,
    flex:1
  },
  videoDesc:{
    fontSize:9
  }
});

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}