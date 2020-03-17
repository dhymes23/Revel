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
    fontWeight: "700",
    textAlign: "center"
  }
});

export default ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Image source={require("./image/Key.png")} />
    <Text style={styles.buttonText}>
      Here are the ingredients of the scanned item:
    </Text>
    <Image source={require("./image/test.png")} />
    <TouchableOpacity
      onPress={() => navigation.navigate("MainMenu")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>MainMenu</Text>
    </TouchableOpacity>
  </View>
);
