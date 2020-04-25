// Screen for the main menu

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import { Button, Paragraph, Menu, Provider } from "react-native-paper";
import Firebase from  "../util/Firebase";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch"
  },
  image: {
    width: 400,
    height: 400
  },
  scrollview: {
    backgroundColor: "#fff",
    alignSelf: "stretch"
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
    width: 290,
    height: 100,
    borderRadius: 40,
    textAlign: "center"
  },
  buttonText: {
    color: "#303030",
    fontSize: 30,
    fontWeight: "700"
  }
});

class MainMenu extends React.Component {

  signOut(navigate){
    Firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("Logged out");
      navigate("UserLogin");
    }).catch(function(error) {
      // An error happened.
    });
  }

  state = {
    visible: false
  };
  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.scrollview}>
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
            <Image
              style={styles.image}
              source={require("./image/REvel.png")}
            ></Image>
            <StatusBar barStyle="light-content" />
            <TouchableOpacity
              onPress={() => navigate("ScanItem")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Scan An Item</Text>
            </TouchableOpacity>
          </View>
        </Provider>
      </ScrollView>
    );
  }
}
export default MainMenu;
