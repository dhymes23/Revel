// Screen for the food information

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,Dimensions

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
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height:screenHeight

  },
  view:{
    flexDirection:"column",
    alignItems:'center'
  },
  text: {
    color: "#303030",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 20,
    letterSpacing: -0.02,
  },
  textBold: {
    color: "#303030",
    fontSize: 18,
    textAlign: "left",
    paddingVertical: 5,
    letterSpacing: -0.02,
    fontWeight:"bold"
  },
  button: {
    height: 60,
    width: 160,
    borderRadius: 10,
    backgroundColor: "#3bde26",
    marginRight: 15,
    marginTop: 100,
    alignSelf: "center"
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
    visible: false,
    name:"",
    category:"",
    ingredients:"",
    hazardous:false
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  componentDidUpdate(prevProps) {
    // Get previous and current zip/position
    // const name = prevProps.navigation.getParam("name");
    // // const lat = this.props.navigation.getParam("lat");
    //
    // const category = prevProps.navigation.getParam("category");
    // // const lon = this.props.navigation.getParam("lon");
    //
    // const ingredients = prevProps.navigation.getParam("ingredients");
    // // const zipcode = this.props.navigation.getParam("zipcode");
    //
    // this.setState({
    //   name:name,
    //   category:category,
    //   ingredients:ingredients,
    //   hazardous:hazardous
    // })

  }
  render() {
    const { navigate } = this.props.navigation;
    var  name  = this.props.navigation.getParam("name");
    var  category  = this.props.navigation.getParam("category");
    var  ingredients  = this.props.navigation.getParam("ingredients");
    var  hazardous  = this.props.navigation.getParam("hazardous");
    console.log(ingredients);
    if(hazardous == true){
      alert(`"${name}" contains your blacklisted ingredients and is hazardous for you.`);
    }
    return (
      <Provider>
      <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: "#fff",
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
        // fontFamily: "HelveticaNeue-Italic",
        color: "#3bde26",
        alignSelf: "center"
      }}
      >
      Food Info
      </Text>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View >
      {name &&
        <View style={styles.view}>
        <Text style={styles.textBold}>Product Name:</Text>
        <Text style={styles.text}> {name}</Text>
        </View>}

        {category &&
          <View style={styles.view}>
          <Text style={styles.textBold}>Category:</Text>
          <Text style={styles.text}> {category}</Text>
          </View>}

          {ingredients !== undefined &&
            <View style={styles.view}>
            <Text style={styles.textBold}>Ingredients:</Text>
            <Text style={styles.text}> {ingredients}</Text>
            </View>}
            </View>
            </ScrollView>


            </View>
            </Provider>
          );
        }
      }
      export default FoodInfo;
