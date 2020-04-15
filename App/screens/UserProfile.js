import React from "react";
import { FlatList, Text, View } from "react-native";

import { SearchBar } from "../components/SearchBar";
import { SearchItem } from "../components/List";
import { getIngredients } from "../util/LocalStorage";
import { addIngredients } from "../util/LocalStorage";

// ///////////////////////////////////////////////////////////////////
// React class is created because we need access to state and will
// have dynamic data.
// ///////////////////////////////////////////////////////////////////

class UserProfile extends React.Component {
  // State (a React thing) - essentially the "instance variables" of this class
  state = {
    ingredients: "",
    ingredientsList: []
  };

  // React lifecycle method (override) for when screen is being mounted or updated
  // This method is calling the getIngredients() method to load recent search items
  // (from the phone's storage) into this screen's state
  componentDidMount() {
    getIngredients().then(ingredientsList => {
      this.setState({ ingredientsList });
    });
  }

  storeIngredients = () =>
    addIngredients({
      ingredients: this.state.ingredients
    });

  // props.navigation.navigate("MainMenu");

  // React lifecycle method (override) for when screen is being mounted or updated
  render() {
    // The actual JSX to return/display
    return (
      // "item" refers to each item in this.state.ingredientsList array []
      <FlatList
        data={this.state.ingredientsList}
        renderItem={({ item }) => <SearchItem name={item.ingredients} />}
        keyExtractor={item => item.ingredients.toString()}
        // The header of each component is composed of the search bar and
        // the word "Recents"....THEN follows each item below
        ListHeaderComponent={
          <View>
            <SearchBar
              onSearch={() => this.storeIngredients()}
              searchButtonEnabled={this.state.ingredients.length >= 1}
              placeholder="Enter ingredients"
              onChangeText={ingredients => this.setState({ ingredients })}
            />
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 16,
                color: "#aaa",
                marginTop: 10,
                marginBottom: 5
              }}
            >
              Blacklisted Ingredients
            </Text>
          </View>
        }
      />
    );
  }
}

export default UserProfile;

/* // Screen for user's Allergies Sensitivities and Preferences

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Picker,
  TextInput,
  Alert,
  Image
} from "react-native";
// import ModalDropdown from 'react-native-modal-dropdown';

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
  picturePlaceholder: {
    backgroundColor: "#c2c5cc",
    width: 90,
    height: 90,
    borderRadius: 180,
    alignSelf: "center"
  },
  imageSytle: {
    width: 15,
    height: 15
  }
});

class UserProfile extends React.Component {
  //   state = {
  //     SAP: ""
  //   }

  //   updateSAP = (SAP) =>
  //       this.setState({SAP:SAP})

  userInfo = {
    fname: "John",
    lname: "Doe",
    UsrNm: "JDog",
    Email: "jdoe@example.com",
    Password: "********"
  };

  render() {
    return (
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
          Profile
        </Text>
        <View style={styles.picturePlaceholder}></View>
        <View>
          <Text style={{ paddingTop: 50, fontSize: 20 }}>
            First Name:
            <Text style={{ color: "#c2c5cc" }}> {this.userInfo.fname}</Text>
          </Text>
          <Text style={{ paddingTop: 10, fontSize: 20 }}>
            Last Name:{" "}
            <Text style={{ color: "#c2c5cc" }}>{this.userInfo.lname}</Text>
          </Text>
          <Text style={{ paddingTop: 10, fontSize: 20 }}>
            Username:{" "}
            <Text style={{ color: "#c2c5cc" }}>{this.userInfo.UsrNm}</Text>
          </Text>
          <Text style={{ paddingTop: 10, fontSize: 20 }}>
            Email:{" "}
            <Text style={{ color: "#c2c5cc" }}>{this.userInfo.Email}</Text>
          </Text>
          <Text style={{ paddingTop: 10, fontSize: 20 }}>
            Password:{" "}
            <Text style={{ color: "#c2c5cc" }}> {this.userInfo.Password}</Text>
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.imageSytle}
            // source={require("C:Usersd_hymRevel-masterRevel-masterAppscreensimageedit-pen-icon-26.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// export default ({ navigation }) => (

// );
export default UserProfile; */
