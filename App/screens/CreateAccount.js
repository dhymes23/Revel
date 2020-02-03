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
    <TextInput/>
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Username:(mimimum 8 characters)</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput/>
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Password:</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput/>
    </View>
    <Text style = {{fontWeight:"bold",fontSize:20}}>Re-Enter Password:</Text>
    <View style = {{backgroundColor:'#3bde26',height:35}}>
    <TextInput/>
    </View>
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

function accountAuthentify(userName, Password,email){
  userNameContiansnum = false;
  userNamecharCount = false; 
  if(userName.length() >= 8){
    userNamecharCount = true;
  for(i = 0; i <= userName.length(); i++ ){
      if(typeof userName.charAt(i) == "number"){
        userNameAuth = true; 
      }
    }
    // Write Code to check is user name is in the database already
    // Write Code to check if email is in the Database
  }
}

