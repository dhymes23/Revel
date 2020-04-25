// Screen for user's Allergies Sensitivities and Preferences

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Picker,
  TextInput,
  Alert
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { Button, Paragraph, Menu, Provider } from "react-native-paper";
import Firebase from  "../util/Firebase";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 40,

  },
  container2: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 80
  },
  text: {
    color: "#303030",
    fontSize: 30,
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
  },
  subType: {
    width: 320,
    fontSize: 20
  },
  messageStyle: {
    height: 250,
    backgroundColor: "#3bde26",
    fontSize: 20,
    padding:10,
    textAlignVertical: "top",
  }
});

class CreatePost extends React.Component {
  //   state = {
  //     SAP: ""
  //   }

  //   updateSAP = (SAP) =>
  //       this.setState({SAP:SAP})

  signOut(navigate){
    Firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("Logged out");
      navigate("UserLogin");
    }).catch(function(error) {
      // An error happened.
    });
  }

  createPost(props){
    var message = this.state.msg;

        Firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var uid = user.uid;
                var  barcode_number  =  props.navigation.getParam("barcode_number");
                Firebase.database().ref('posts/').push().set({
                  message: message,
                  barcode_number:barcode_number,
                  name:displayName,
                  uid : uid,
                  email:email
                }, function(error) {
                    if (error) {
                      console.log("The write failed...");
                    } else {
                        console.log(" Data saved successfully!");
                        props.navigation.goBack();
                    }
                  });
              } else {
                // User is signed out.
                alert("You must be logged in to create posts");
              }
        });
  }

  state = {
    postSubject: "",
    msg: "",
    visible: false
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  handlePost = text => {
    this.setState({ postSubject: text });
  };
  handleMessage = text => {
    this.setState({ msg: text });
  };
  checkPost = (postSubject, message) => {
    return "Subject" + postSubject + "message" + message;
  };

  render() {
    const { navigate } = this.props.navigation;
    var name = this.props.navigation.getParam("name");
    var barcode_number = this.props.navigation.getParam("barcode_number");
    console.log("name createpost ",name);

    return (
      <Provider>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            backgroundColor: "#fff"
          }}
        >
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={<Button onPress={this._openMenu}>Menu</Button>}
          >
            <Menu.Item
              onPress={() => {
                return navigate("MainMenu");
              }}
              title="Main Menu"
            />
            <Menu.Item
              onPress={() => {
                return navigate("ASP");
              }}
              title="Preferences"
            />
            <Menu.Item
              onPress={() => {
                return navigate("ScanItem");
              }}
              title="Scan Item"
            />
            <Menu.Item
              onPress={() => {this.signOut(navigate)}}
              title="Sign Out"
            />
          </Menu>
        </View>
        <View style={styles.container}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              padding: 20,
              // fontFamily: "HelveticaNeue-Italic",
              color: "#3bde26",
              alignSelf: "center"
            }}
          >
            Create Post
          </Text>


          {name && (
            <View>
          <Text style={{ fontWeight: "bold", fontSize: 25  }}>
            Product:
          </Text>
            <Text

              style={styles.subType}
            >
              {name}
            </Text>
            </View>)}


          <View>
          <Text style={{ fontWeight: "bold", fontSize: 25, marginTop:20 }}>
            Message:
          </Text>
            <TextInput
              multiline={true}
              onChangeText={this.handleMessage}
              style={styles.messageStyle}
            >

            </TextInput>
          </View>

          <View style={{marginTop:20,alignSelf:'center',}}>
            <StatusBar barStyle="light-content" />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.createPost(this.props)}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Provider>
    );
  }
}

// export default ({ navigation }) => (

// );
export default CreatePost;
