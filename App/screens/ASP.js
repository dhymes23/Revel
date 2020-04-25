// Screen for user's Allergies Sensitivities and Preferences

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Picker,
  TextInput
} from "react-native";
import { Button, Paragraph, Menu, Provider } from "react-native-paper";

import ModalDropdown from "react-native-modal-dropdown";

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
    paddingTop: 40
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
  button2: {
    height: 60,
    width: 160,
    borderRadius: 10,
    backgroundColor: "#3bde26",
    marginRight: 15,
    //marginTop: 175,
    alignItems: "center"
  },
  buttonText: {
    color: "#303030",
    fontSize: 30,
    fontWeight: "700"
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
class ASP extends React.Component {
  //   state = {
  //     SAP: ""
  //   }

  //   updateSAP = (SAP) =>
  //       this.setState({SAP:SAP})

  state = {
    text1: "",
    text2: "",
    SAP: "",
    visible: false
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    const { navigate } = this.props.navigation;

    return (
      //   <View style={styles.container}>
      //     <View >
      //     <Picker selectedValue={this.state.SAP} onValueChange = {this.updateSAP} >
      //    <Picker.Item label="Allergy" value="allergy" />
      //    <Picker.Item label="Preference" value="preference" />
      //     <Picker.Item label="Sensitivity" value="sensitivity" />
      // </Picker>
      // </View>
      // <View></View>
      // <View style = {{justifyContent:"space-around"}}>
      //     <StatusBar barStyle="light-content" />
      //     <TouchableOpacity
      //       onPress={() => navigation.navigate("MainMenu")}
      //       style={styles.button}
      //     >
      //       <Text style={styles.buttonText}>Back</Text>
      //     </TouchableOpacity>
      //     </View>
      //   </View>
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
                fontSize: 35,
                padding: 20,
                // fontFamily: "HelveticaNeue-Italic",
                color: "#3bde26",
                alignSelf: "stretch"
              }}
            >
              Select Preferences
            </Text>
          </View>
          <View style={styles.container2}>
            <View
              style={{
                justifyContent: "flex-start",
                padding: 10,
                height: 40,
                width: 160,
                borderRadius: 10,
                backgroundColor: "#3bde26",
                marginRight: 15
              }}
            >
              <ModalDropdown
                options={[
                  "Peanut",
                  "Seafood",
                  "Gluten",
                  "Dairy",
                  "Sugar",
                  "Soybean",
                  "Egg",
                  "Wheat",
                  "Tree Nut",
                  "Potato Starch",
                  "Corn",
                  "Red Meat"
                ]}
                defaultValue="Select Ingredient"
                textStyle={{ fontSize: 18 }}
                dropdownStyle={{ width: 150 }}
                dropdownTextStyle={{ fontSize: 14 }}
              />
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                paddingBottom: 10,
                height: 40,
                width: 160,
                borderRadius: 10,
                backgroundColor: "#3bde26",
                marginLeft: 15,
                alignItems: "center"
              }}
            >
              <ModalDropdown
                options={["Sensivity", "Allergy"]}
                showsVerticalScrollIndicator={true}
                defaultValue="Category"
                textStyle={{ fontSize: 18 }}
                dropdownStyle={{ width: 100, alignItems: "center" }}
                dropdownTextStyle={{ fontSize: 14 }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Your preferences have been updated!")}
          >
            <Text style={{ textAlign: "center", paddingTop: 15, fontSize: 30 }}>
              Submit
            </Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 34,
                padding: 20,
                // fontFamily: "HelveticaNeue-Italic",
                color: "#3bde26",
                alignSelf: "stretch"
              }}
            >
              Need More Options?
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => this.props.navigation.navigate("UserProfile")}
          >
            <Text style={{ textAlign: "center", paddingTop: 15, fontSize: 30 }}>
              Click Here
            </Text>
          </TouchableOpacity>
        </View>
      </Provider>
    );
  }
}

// export default ({ navigation }) => (

// );
export default ASP;
