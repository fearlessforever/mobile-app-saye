import React , { Component } from 'react'
import { View , Text } from 'react-native'
import { connect } from 'react-redux'
import Loader from './screens/Loader'
import LoginPage from './screens/Login'
import Home from './App'

class AppNew extends Component{
  componentDidMount(){
    setTimeout(()=>{
      this.props.dispatch({
        type:'loaded'
      });
    }, 1000)
  }

  render(){
    //console.log(this.props)
    if( !this.props.pageAction.isLoaded ){
      return(
        <Loader />
      );
    }
    if( !this.props.pageAction.forcePageLogin ){
      return(
        <LoginPage />
      );
    }
    return(
      <Home />
    );
    return(
      <View><Text style={{fontSize:30}}>Tes</Text></View>
    );
  }
}

export default connect((store)=>{
  return {
    pageAction:store.pageAction
  };
})(AppNew);