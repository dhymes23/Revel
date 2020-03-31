// Screen for posting to the community page
var product;
var post;
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput
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
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 30,
    backgroundColor: "#3bde26",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default ({ navigation }) => (
  <View style={styles.container}>
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 35,
          padding: 20,
          fontFamily: "HelveticaNeue-Italic",
          color: "#3bde26"
        }}
      >
        Post About Product
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 35,
          padding: 20,
          fontFamily: "HelveticaNeue-Italic",
          color: "#3bde26"
        }}
      ></Text>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Product:</Text>
      <View style={{ backgroundColor: "#3bde26", height: 50 }}>
        <TextInput style={{ fontSize: 30 }} value={product} />
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Message:</Text>
      <View style={{ backgroundColor: "#3bde26", height: 100 }}>
        <TextInput style={{ fontSize: 30 }} multiLint={true} value={post} />
      </View>
    </View>
    <View>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Post Created!")}
      >
        <Text style={styles.buttonText}>Post</Text>
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
