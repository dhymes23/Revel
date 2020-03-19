// Screen for the food information

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image
} from "react-native";
import styled from "styled-components";
import { Button, Paragraph, Menu, Provider } from "react-native-paper";

const Container2 = styled.View`
  flex: 1;
  border: 1px solid #ccc;
  margin: 2px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  background-color: #fff;
  width: 80%;
  padding: 10px;
`;

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
    height: 60,
    width: 160,
    borderRadius: 10,
    backgroundColor: "#3bde26",
    marginRight: 15,
    marginTop: 100,
    alignItems: "center"
  },
  buttonText: {
    color: "#303030",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center"
  }
});
/* var prodName;
var  */

class FoodInfo extends React.Component {
  state = {
    visible: false
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Provider>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={<Button onPress={this._openMenu}>Menu</Button>}
          >
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
              fontWeight: "bold",
              fontSize: 35,
              padding: 20,
              fontFamily: "HelveticaNeue-Italic",
              color: "#3bde26",
              alignSelf: "center"
            }}
          >
            Food Info
          </Text>
          <View style={{ alignContent: "stretch" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20, padding: 25 }}>
              Product:
            </Text>
          </View>
          <Container2>
            <Text>Ingredients & Info:</Text>
          </Container2>
          <TouchableOpacity
            onPress={() => navigate("MainMenu")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>MainMenu</Text>
          </TouchableOpacity>
        </View>
      </Provider>
    );
  }
}
export default FoodInfo;
