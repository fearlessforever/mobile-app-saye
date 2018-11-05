import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image , TouchableOpacity , FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import VideoItem from './components/video-item'
import datas from './data.json'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.navBar}>
          <Image source={ require('./assets/logo.png') } style={{width:98,height:45}}/>
          <View style={styles.rightNavbar}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="account-circle" size={25}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          {/*<VideoItem video={datas.items[0]} /> */}
          <FlatList keyExtractor={(item)=>item.id} data={ datas.items } renderItem={ (video)=> <VideoItem video={video.item} /> } />
        </View>

        <View style={styles.footerTab}>
          <TouchableOpacity style={styles.tabItem} >
            <Icon name="home" size={25}/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} >
            <Icon name="whatshot" size={25}/>
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} >
            <Icon name="subscriptions" size={25}/>
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} >
            <Icon name="folder" size={25}/>
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  //==================================================================
  navBar:{
    height:55,
    backgroundColor: "white",
    elevation:3,
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  rightNavbar:{
    flexDirection:'row'
  },
  navItem:{
    marginLeft:25
  },
  //==================================================================
  footerTab:{
    backgroundColor:'white',
    height:60,
    borderTopWidth:0.5,
    borderColor:'#E5E5E5',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  tabItem:{
    alignItems:'center',
    justifyContent:'center',
  },
  tabTitle:{
    fontSize:11,
    color:'#3c3c3c',
    paddingTop:3
  },
  //==================================================================
  body:{
    flex:1
  }
});