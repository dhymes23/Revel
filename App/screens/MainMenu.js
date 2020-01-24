// Screen for the main menu

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar
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
    <StatusBar barStyle="light-content" />
    <Text style={styles.text}>Main Menu</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate("ASP")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>ASP</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("CommunityPost")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>CommunityPost</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("CommunitySearch")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>CommunitySearch</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("CreateAccount")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>CreateAccount</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("FoodInfo")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>FoodInfo</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("ScanItem")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>ScanItem</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("UserLogin")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>UserLogin</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("UserProfile")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>UserProfile</Text>
    </TouchableOpacity>
  </View>
);
