// Screen for creating an account

var psswrd;
var psswrd2;
var email;
var usrNme;
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Button,
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

export default ({ navigation }) => (
  <View style={styles.container}>
    <View>
    <Text style = {{fontWeight:"bold",fontSize:35,padding:20,fontFamily:'HelveticaNeue-Italic',color:'#3bde26'}}>Create Account</Text>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Name:</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput/>
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>E-mail:</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput value = {email}/>
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Username:(mimimum 6 characters)</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput value = {usrNme}/>
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Password:</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput value = {psswrd}/>
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Re-Enter Password:</Text>
    <View style = {{backgroundColor:'#3bde26',height:35,paddingBottom: 20}}>
    <TextInput value = {psswrd2}/>
    </View>
    </View>
    <View>
    <StatusBar barStyle="light-content" />
    <TouchableOpacity style={styles.button} 
      onPress= {() => accountAuthentify(usrNme,psswrd,psswrd2,email)}>
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

function accountAuthentify(userName, p1,p2, email){
  // userNameContiansnum = false;
  // userNamecharCount = false; 
  // psswrdMatch = false;
  // Checks to see if user input matches authenticity requirements 
  var numCount = 0;
  var authenticEntry = true;
  if(userName.length < 6){
    authenticEntry = false;
  for(i = 0; i <= userName.length; i++ ){
      if(typeof userName.charAt(i) == "number"){
        numCount++;
        if(numCount == 2){
          break;
        }else{
          authenticEntry = false;
        }
      }
    }
  }
    numCount = 0;
    // Password Authentification 
    if(p1 != p2){
      authenticEntry = false;
      if(password1.length < 8){
        authenticEntry = false;
        for(i = 0; i <= userName.length; i++ ){
          if(typeof userName.charAt(i) == "number"){
            numCount++;
            if(numCount == 2){
              break;
            }else{
              authenticEntry = false;
            }
          }
        }
      }
      
    }
    
    // Write Code to check is user name is in the database already
    // Write Code to check if email is in the Database
    if(authenticEntry = true){
      return userName,password1,password2,email;
      // navigation.navigate("MainMenu");
    }
  
  }

  

