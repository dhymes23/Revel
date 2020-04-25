// Screen for user's Allergies Sensitivities and Preferences

import React, { Component } from "react";
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
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center"
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
    width: 165,
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
  helpButton: {
    backgroundColor: "#3bde26",
    height: 25,
    width: 25,
    borderRadius: 50
  }
});

// const PSA = [
//   {
//     label:'Allergy',
//     value:'aUser'
//   },
//   {
//     label:'Preference',
//     value:'pUser'
//   },
//   {
//     label:'Sensitivity',
//     value:'sUser'
//   }
// ]
class CommunitySearch extends Component {
  //   state = {
  //     SAP: ""
  //   }

  //   updateSAP = (SAP) =>
  //       this.setState({SAP:SAP})

  state = {
    InterationGroup: ["Food Allergy", "Food Sensitivity", "Any"],

    Asp: ["Sensivity", "Allergy"],

    text1: "",
    text2: "",
    SAP: "",
    visible: false
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    var post2 = this.props.navigation.getParam("post1");
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
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                padding: 20,
                // fontFamily: "HelveticaNeue-Italic",
                color: "#3bde26",
                alignSelf: "stretch"
              }}
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 28,
                padding: 20,
                // fontFamily: "HelveticaNeue-Italic",
                color: "#3bde26",
                alignSelf: "stretch"
              }}
            >
              Posts About This Product
            </Text>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.helpButton}
                onPress={() => {
                  alert("Choose what group you want to interact with");
                }}
              >
                <Text
                  style={{ fontSize: 10, textAlign: "center", paddingTop: 5 }}
                >
                  ?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            <View
              style={{
                padding: 10,
                height: 50,
                width: 180,
                borderRadius: 10,
                backgroundColor: "#3bde26",
                marginRight: 15,
                marginTop: 20
              }}
            >
              <ModalDropdown
                options={this.state.InterationGroup}
                defaultValue="Interaction Group"
                textStyle={{ fontSize: 20 }}
                dropdownStyle={{ width: 170 }}
                dropdownTextStyle={{ fontSize: 14 }}
                onSelect={value =>
                  this.setState({
                    asData: String(this.state.InterationGroup[value])
                  })
                }
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              alert("Your info has been updated");
            }}
          >
            <Text style={{ textAlign: "center", paddingTop: 15, fontSize: 30 }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Provider>
    );
  }
}

// export default ({ navigation }) => (

// );

export default CommunitySearch;
