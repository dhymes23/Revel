import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  button1:{
    height: 60,
    width:160,
    borderRadius:10,  
    backgroundColor : '#3bde26',
    marginRight:15,
    marginTop:100,
    alignItems:"center",
    alignSelf:'center'
  },
  button2:{
    height: 60,
    width:160,
    borderRadius:10,  
    backgroundColor : '#3bde26',
    marginRight:15,
    marginTop:10,
    alignItems:"center",
    alignSelf:'center'
  },
  textInputStyle:{
    borderRadius:40,
    borderColor:'#000000',
    padding:20,
    height:30
    
 
  },
  topText:{
    alignContent: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    
  },
  middleText:{
    padding: 350,
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight:'bold',
    fontSize:20,
    alignSelf:'center',
    paddingTop:20,


  }

});

const userInfo= {username:'admin', pass:'p123'}

class UserLogin extends React.Component{
  state = {
    userName:'',
    Password:'',

  }
  handleUserName = (text) =>{
    this.setState({userName:text})
  }
  handlePass = (text) =>{
    this.setState({Password:text})
  }
  checkLogin = (username,password) =>{
    if(userInfo.username = username && userInfo.pass == password ){
      this.props.navigation.navigate('MainMenu')
    }else{
      alert('Username or Password Incorrect')
    }
  }

  render(){
  return (
    <View style={styles.container}>
      <View>
      <Text style ={{color :'#3bde26', fontWeight: 'bold', textAlign:'center',fontSize:60,paddingBottom: 30, fontFamily:'HelveticaNeue-Italic'}}>Revel</Text>
      <Text style = {{color:'#3bde26',fontFamily:'HelveticaNeue-Italic'}}>Username:</Text>
      <View style = {{backgroundColor:'#3bde26',width:230}}>
      <TextInput style = {{borderBottomColor:"#000",height:30}}
                  onChangeText = {this.handleUserName}/>
      </View>
       <Text style = {{color:'#3bde26',fontFamily:'HelveticaNeue-Italic'}}>Password:</Text>
       <View style = {{backgroundColor:'#3bde26',width:230}}>
       <TextInput style = {{borderBottomColor:"#000",height:30}}
                  onChangeText = {this.handlePass}/> 
       </View>
       <View>
        <TouchableOpacity style = {styles.button1}
                          onPress = {() => this.checkLogin(this.state.userName,this.state.Password)} >
        <Text style = {styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button2}>
        <Text style = {styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
      {/* <Button title = "Log-in" style = {styles.buttonStyle}/>
      <Button title ="Sign-Up" style ={styles.buttonStyle}/>
      <Button title = "Don't Have Account?"/> */}
      </View>
      </View>
    </View>
  );
  }
}

export default UserLogin




