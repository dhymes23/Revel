import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput
} from "react-native";
import Firebase from  "../util/Firebase";

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



export default class CreateAccount extends React.Component {

  state = {
    userName:"",
     name:"",
     p1:"",
     p2:"",
     email:"",
     numCount:0,
     authenticEntry:true
  };

//    validation() {
//     // userNameContiansnum = false;
//     // userNamecharCount = false;
//     // psswrdMatch = false;
//     // Checks to see if user input matches authenticity requirements
//     var userName = this.state.userName;
//     var p1 = this.state.p1;
//     var p2 = this.state.p2;
//     var email = this.state.email;
//     var numCount = this.state.numCount;
//     var authenticEntry = this.state.authenticEntry;
//     if (userName.length < 6) {
//       authenticEntry = false;
//       for (i = 0; i <= userName.length; i++) {
//         if (typeof userName.charAt(i) == "number") {
//           numCount++;
//           if (numCount == 2) {
//             break;
//           } else {
//             authenticEntry = false;
//           }
//         }
//       }
//     }
//     numCount = 0;
//     // Password Authentification
//     if (p1 != p2) {
//       authenticEntry = false;
//       if (p1.length < 8) {
//         authenticEntry = false;
//         for (i = 0; i <= userName.length; i++) {
//           if (typeof userName.charAt(i) == "number") {
//             numCount++;
//             if (numCount == 2) {
//               break;
//             } else {
//               authenticEntry = false;
//             }
//           }
//         }
//       }
//     }
//
//     // Write Code to check is user name is in the database already
//     // Write Code to check if email is in the Database
//     // All of the above is handled in firebase authentication.
//
//     if ((authenticEntry = true && userName != "undefined")) {
//
//     } else {
//       alert("Username must cotain 8 charaters");
//     }
// }

createUser(props){
  var name = this.state.name;
  var email = this.state.email;
  var password = this.state.p1;
  var password2 = this.state.p2;
  if(password==password2 ){
    if(name!=""){
      Firebase.auth().createUserWithEmailAndPassword(email, password).then(function(firebaseUser) {
       // Success
       var user = Firebase.auth().currentUser;

        user.updateProfile({
          displayName: name,
        }).then(function() {
          // Update successful.
          props.navigation.navigate("UserLogin");

        }).catch(function(error) {
          // An error happened.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
   }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
    }else{
      alert("Please enter your name");
    }
  }else{
    alert("Both the passwords do not match");
  }
}

  render(){

    return(
      <View style={styles.container}>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 35,
              padding: 20,
              // fontFamily: "HelveticaNeue-Italic",
              color: "#3bde26"
            }}
          >
            Create Your Revel Account
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Name:</Text>
          <View style={{ backgroundColor: "#3bde26", height: 35 }}>
            <TextInput onChangeText={text =>this.setState({name:text})} />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>E-mail:</Text>
          <View style={{ backgroundColor: "#3bde26", height: 35 }}>
              <TextInput  onChangeText={text =>this.setState({email:text})}  />
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Password:</Text>
          <View style={{ backgroundColor: "#3bde26", height: 35 }}>
            <TextInput secureTextEntry={true} onChangeText={text =>this.setState({p1:text})} />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Re-Enter Password:
          </Text>
          <View
            style={{ backgroundColor: "#3bde26", height: 35}}
          >
            <TextInput secureTextEntry={true} onChangeText={text =>this.setState({p2:text})} />
          </View>
        </View>
        <View style={{marginTop:20}}>
          <StatusBar barStyle="light-content" />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.createUser(this.props)}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View>
          <StatusBar barStyle="light-content" />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("UserLogin")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
