// Screen for user's Allergies Sensitivities and Preferences

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
  FlatList
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { SearchItem } from "../components/List";
import Firebase from  "../util/Firebase";

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
  subType: {
    width: 250,
    height: 40,
    backgroundColor: "#3bde26",
    borderRadius: 50,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 25
  },
  messageStyle: {
    width: 320,
    height: 250,
    backgroundColor: "#3bde26",
    borderRadius: 50,
    alignSelf: "center",
    fontSize: 15,
    textAlign: "justify"
  }
});

class CommunityPost extends React.Component {
  //   state = {
  //     SAP: ""
  //   }

  //   updateSAP = (SAP) =>
  //       this.setState({SAP:SAP})

  // state = {
  //   postSubject: "",
  //   msg: ""
  // };
  // handlePost = text => {
  //   this.setState({ postSubject: text });
  // };
  // handleMessage = text => {
  //   this.setState({ msg: text });
  // };
  // checkPost = (postSubject, message) => {
  //   return "Subject" + postSubject + "message" + message;
  // };

  state = {
    posts: []
  };

  getPosts(barcode_number){
    var that = this;

    console.log("CommunityPost ", barcode_number);
    var postsRef = Firebase.database().ref('posts').orderByChild('barcode_number').equalTo(barcode_number);
    postsRef.once('value').then(function(snapshot) {
      let posts = [];

      snapshot.forEach(function(child) {
          console.log("snapshot ",child.val());
          var itemVal = child.val();
          posts.push(itemVal);
      });
      console.log("posts name" , posts);
      that.setState({posts})
    });

  }

componentDidMount(){
  var barcode_number = this.props.navigation.getParam("barcode_number");

  this.getPosts(barcode_number);
}


  render() {

    return (
      <View style={styles.container}>
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
         Community Posts
        </Text>

        <FlatList
            data={this.state.posts}
            renderItem={({ item }) => (
                <SearchItem
                    name={item.name}
                    message={item.message}
                />
            )}
            keyExtractor={item => item.uid.toString()}
        />
        </View>
    );
  }
}

// export default ({ navigation }) => (

// );
export default CommunityPost;
