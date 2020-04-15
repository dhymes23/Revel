// Screen for creating an account


import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center"
  },
  text: {
    color: "#303030",
    fontSize: 30,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  button: {
    backgroundColor: "#3bde26",
    borderColor: "#303030",
    borderLeftColor: "#303030",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 50,
    textAlign: "center"
  },
  buttonText: { 
    color: "#303030",
    fontSize: 30,
    fontWeight: "700"
  }
});

// const Info = require("C:/Users/d_hym/Revel-master/Revel-master/App/util/databaseConnectSchema.js");
// const connectDB = require("C:/Users/d_hym/Revel-master/Revel-master/App/util/connectMongoDB.js");

class CreateAccount extends React.Component{

state = {
  userName: '',
  Password: '',
  Password2: '',
  email: '',
  name: '',
};
handleName = (text) =>{
  this.setState({name:text})
}

handleUserName = (text) => {
  this.setState({userName:text})
}
handlePass = (text) => {
  this.setState({Password:text})
}
handlePassCheck = (text) => {
  this.setState({Password2:text})
}
handleEmail = (text) => {
  this.setState({email:text})
}
handleName = (text) => {
  this.setState({name:text})
}

logInfo = (name,userName,Password,Password2,Email) => {
var uCheck = true;
var pCheck = true;

 if(userName.length <= 9 && userName == null){
   uCheck = false;
 }else{
   uCheck = true;
 }
   uNumCount = 0; 
   pNumCount = 0;
  for(i = 0; i <= userName.length; i++){
   if(typeof userName.charAt(i) == "number"){
      uNumCount++
    if(uNumCount <= 2){
      uCheck = false;
    }
    else{
      uCheck = true;
    }
  }
}
  if(Password == null && Password2 == null){
    pCheck == false;
  }
  if(Password != Password2 ){
    pCheck = false;
  }
  if(Password.length <= 8){
    pCheck = false;
  }
  for(i = 0; i < Password.length; i++){
    if(typeof userName.charAt(i) == "number"){
      pNumCount++;
     }
    
  }

if(uCheck == true && pCheck == true ){
  alert('Account Created')
}
else{
  alert('Check the following')
}

// connectDB().then(() =>{ 
// Info.create({
//   Name:name,
//   usrName:userName,
//   pass:Password,
//   email:Email,
// });
// }
// );
// }
}
  render(){
    return(
  <View style={styles.container}>
    <View>
    <Text style = {{fontWeight:"bold",fontSize:35,padding:20,fontFamily:'HelveticaNeue-Italic',color:'#3bde26'}}>Create Account</Text>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Name:</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput on onChangeText={this.handleName}/>
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>E-mail:</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput onChangeText={this.handleEmail}
                />
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Username:(mimimum 6 characters)</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput onChangeText={this.handleUserName}>
    </TextInput>
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Password:</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput onChangeText = {this.handlePass}/>
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Re-Enter Password:</Text>
    <View style = {{backgroundColor:'#3bde26',height:35,paddingBottom: 20}}>
    <TextInput onChangeText ={this.handlePassCheck}/>
    </View>
    </View>
    <View>
    <StatusBar barStyle="light-content" />
    <TouchableOpacity style={styles.button} 
       onPress= {() => this.logInfo(this.state.name,this.state.userName,this.state.Password,this.state.Password2,this.state.email)
      }
        // accountAuthentify(this.state.userName,this.state.Password,this.state.Password2,this.state.email)}
      >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
      
    </View>
    <View>
    <StatusBar barStyle="light-content" />
    <TouchableOpacity
      onPress={() => navigation.navigate("MainMenu")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
    </View>
  </View>
    );
  }
}

// function accountAuthentify(userName, p1,p2, email){
//     // userNameContiansnum = false;
//     // userNamecharCount = false; 
//     // psswrdMatch = false;
//     // Checks to see if user input matches authenticity requirements 
    
//     var numCount = 0;
//     var authenticEntry = true;
//     if(userName.length < 6){
//       authenticEntry = false;
//     for(i = 0; i <= userName.length; i++ ){
//         if(typeof userName.charAt(i) == "number"){
//           numCount++;
//           if(numCount == 2){
//             break;
//           }else{
//             authenticEntry = false;
//           }
//         }
//       }
//     }
//       numCount = 0;
//       // Password Authentification 
//       if(p1 != p2){
//         authenticEntry = false;
//         if(p1.length < 8){
//           authenticEntry = false;
//           for(i = 0; i <= userName.length; i++ ){
//             if(typeof userName.charAt(i) == "number"){
//               numCount++;
//               if(numCount == 2){
//                 break;
//               }else{
//                 authenticEntry = false;
//               }
//             }
//           }
//         }
        
//       }
      
//       // Write Code to check is user name is in the database already
//       // Write Code to check if email is in the Database
      
//       if(authenticEntry = true && userName != 'undefined'){
//         return userName,p1,p2,email;
//         // navigation.navigate("MainMenu");
//       }
//       else{
//             alert('Must change the following');
//       }
    
//     }
  
export default CreateAccount;
