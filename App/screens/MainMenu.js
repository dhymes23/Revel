// Screen for the main menu

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from "react-native";
import { Button, Paragraph, Menu, Provider } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch"
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
    height: 50,
    textAlign: "center"
  },
  buttonText: {
    color: "#303030",
    fontSize: 30,
    fontWeight: "700"
  }
});

class MainMenu extends React.Component {
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
                title="ASP"
              />
              <Menu.Item
                onPress={() => {
                  return navigate("CommunitySearch");
                }}
                title="Community"
              />
              <Menu.Item
                onPress={() => {
                  return navigate("ScanItem");
                }}
                title="Scan Item"
              />
              <Menu.Item
                onPress={() => {
                  return navigate("UserProfile");
                }}
                title="Profile"
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
            <StatusBar barStyle="light-content" />
            <Text
              style={{
                color: "#3bde26",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 60,
                paddingBottom: 30,
                fontFamily: "HelveticaNeue-Italic"
              }}
            >
              Revel
            </Text>
            <TouchableOpacity
              onPress={() => navigate("FoodInfo")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>FoodInfo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("ScanItem")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>ScanItem</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("UserProfile")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>UserProfile</Text>
            </TouchableOpacity>
          </View>
        </Provider>
      </ScrollView>
    );
  }
}
export default MainMenu;
