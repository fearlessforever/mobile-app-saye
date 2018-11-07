import React, { Component } from 'react'
import { Text , View, Image , StyleSheet , ImageBackground , Dimensions , TextInput , TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {connect} from 'react-redux'

class Login extends Component{
  constructor(){
    super();
    this.state = {
      securedPassword:true,
      username:'',
      password:'',
      errorMessage:false
    }
  }
  _buttonShowPassword(){
    this.setState({
      securedPassword:!this.state.securedPassword
    });
  }
  _handleInputChange(name , value ){
    const set = {}
    set[name]=value
    this.setState(set);
  }

  _buttonLogin(){
    if(
      this.state.username == 'admin'
      && this.state.password == 'admin'
    ){
      this.props.dispatch({
        type:'logged'
      })
    }else{
      this.setState({
        username:'',password:'',errorMessage:'Invalid Account , Please check your username and password'
      })
    }    
    
  }

  render(){
    return(
      <ImageBackground 
        resizeMode={'cover'}
        resizeMethod={'scale'}
        source={ require('../assets/backgroundImage.jpg') } 
        style={styles.backgroundContainer} >
        <View style={styles.logoContainer}>
          <Image resizeMode={'stretch'} source={ require('../assets/jg.png') } style={styles.logo} />
          <Text style={styles.logoText} >Jounin Gakure</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon name="account-box" size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
          <TextInput 
            style={styles.input}
            placeholder={'Your Username'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid={'transparent'}
            name="username"
            onChangeText={this._handleInputChange.bind(this,'username')}
            value={this.state.username}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
          <TextInput 
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.securedPassword}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid={'transparent'}
            name="password"
            onChangeText={this._handleInputChange.bind(this,'password')}
            value={this.state.password}
          />
          <TouchableOpacity style={styles.btnEye} onPress={this._buttonShowPassword.bind(this)} >
            <Icon name={ this.state.securedPassword ? 'visibility' : 'visibility-off' } size={33} color={'rgba(255,255,255,0.7)'}  />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.btnLogin} onPress={this._buttonLogin.bind(this)}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
        { 
          this.state.errorMessage ?
          <View style={styles.errorMessageContainer}>
            <Text style={styles.textError}>{this.state.errorMessage}</Text>
          </View>
           : null }
        
      </ImageBackground>
    );
  }
}

export default connect()(Login);

const { height , width } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundContainer:{
    flex:1,
    //width:width,
    height:height,
    alignItems:'center',
    justifyContent:'center'
  },
  logoContainer:{
    alignItems:'center',
  },
  logo:{
    width:200,
    height:100,
  },
  logoText:{
    color:'white',
    fontSize:20,
    fontWeight:'500',
    marginTop:10,
    opacity:0.5
  },
  inputContainer:{
    marginTop:27
  },
  input:{
    width:width-55,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },
  inputIcon:{
    position:'absolute',
    top:5,
    left:37
  },
  btnEye:{
    position:'absolute',
    top:7,
    right:37
  },
  btnLogin:{
    width:width-55,
    height:45,
    borderRadius:25,
    fontSize:16,
    backgroundColor:'#432577',
    justifyContent:'center'
  },
  textLogin:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'
  },
  errorMessageContainer:{
    marginTop:7,
    width:width-85, 
    justifyContent:'center',
    borderRadius:25,
  },
  textError:{
    color:'rgba(255,255,255,0.7)',
    fontSize:13,
    textAlign:'center',
    fontWeight:'500',
    height:33
  }
});