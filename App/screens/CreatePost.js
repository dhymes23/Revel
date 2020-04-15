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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
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
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  button: {
    height: 60,
    width: 160,
    borderRadius: 10,
    backgroundColor: "#3bde26",
    marginRight: 15,
    marginTop: 175,
    alignItems: "center"
  },
  buttonText: {
    color: "#303030",
    fontSize: 30,
    fontWeight: "700"
  },
  subType: {
    width: 250,
    height: 40,
    backgroundColor: "#3bde26",
    borderRadius: 50,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 25
  },
  messageStyle: {
    width: 320,
    height: 250,
    backgroundColor: "#3bde26",
    borderRadius: 50,
    alignSelf: "center",
    fontSize: 15,
    textAlign: "justify"
  }
});

class CreatePost extends React.Component {
  //   state = {
  //     SAP: ""
  //   }

  //   updateSAP = (SAP) =>
  //       this.setState({SAP:SAP})

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
              onPress={() => {
                return navigate("UserLogin");
              }}
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
              fontFamily: "HelveticaNeue-Italic",
              color: "#3bde26",
              alignSelf: "center"
            }}
          >
            Create Post
          </Text>

          <View>
            <TextInput
              placeholder="Product"
              placeholderTextColor="black"
              onChangeText={this.handlePost}
              style={styles.subType}
            >
              {" "}
            </TextInput>
          </View>
          <View>
            <Text></Text>
            <TextInput
              onChangeText={this.handleMessage}
              style={styles.messageStyle}
            >
              {" "}
            </TextInput>
          </View>
        </View>
      </Provider>
    );
  }
}

// export default ({ navigation }) => (

// );
export default CreatePost;
