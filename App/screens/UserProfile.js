// Screen for the user profile
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from "react-native";

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://revel:<password>@cluster0-uskrk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("userbase").collection("userprofile");
  // perform actions on the collection object
  // information for the user to put into their profile
  client.close();
});

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
    <TouchableOpacity
      onPress={() => navigation.navigate("MainMenu")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  </View>
);
