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
  Image
} from "react-native";
// import ModalDropdown from 'react-native-modal-dropdown';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex:1,
    
  },
  container2: {
    flex: 0,
    flexDirection:"row",
    alignItems: "center",
    paddingTop: 80,
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
    width:160,
    borderRadius:10,  
    backgroundColor : '#3bde26',
    marginRight:15,
    marginTop:175,
    alignItems:"center",

  },
  buttonText: {
    color: "#303030",
    fontSize: 30,
    fontWeight: "700"
  },
  picturePlaceholder:{
    backgroundColor:"#c2c5cc",
    width:90,
    height:90,
    borderRadius:180,
    alignSelf:"center",
  },
  imageSytle:{
    width:15,
    height:15,
  }
});


class UserProfile extends React.Component{
  
//   state = {
//     SAP: ""
//   }

//   updateSAP = (SAP) =>
//       this.setState({SAP:SAP})

 userInfo = {
   fname:'John',
   lname:'Doe',
   UsrNm:'JDog',
   Email:'jdoe@example.com',
   Password:'********',


 }


  

   render(){
    
   return(
     <View style = {styles.container}>
      <Text style = {{fontWeight:"bold",fontSize:35,padding:20,fontFamily:'HelveticaNeue-Italic',color:'#3bde26', alignSelf:"center"}}>Profile</Text>
       <View style = {styles.picturePlaceholder}>
        
       </View>
       <View>
   <Text style = {{paddingTop:50,fontSize:20}}>First Name:<Text style = {{color:"#c2c5cc"}}> {this.userInfo.fname}</Text></Text>
       <Text style = {{paddingTop:10,fontSize:20}}>Last Name: <Text style = {{color:"#c2c5cc"}}>{this.userInfo.lname}</Text></Text>
       <Text style = {{paddingTop:10,fontSize:20}}>Username: <Text style = {{color:"#c2c5cc"}}>{this.userInfo.UsrNm}</Text></Text>
       <Text style = {{paddingTop:10,fontSize:20}}>Email: <Text style = {{color:"#c2c5cc"}}>{this.userInfo.Email}</Text></Text>
       <Text style = {{paddingTop:10,fontSize:20}}>Password: <Text style = {{color:"#c2c5cc"}}> {this.userInfo.Password}</Text></Text>
      </View>
      <TouchableOpacity>
      <Image style ={styles.imageSytle} 
              source ={require("C:\Users\d_hym\Revel-master\Revel-master\App\screens\image\edit-pen-icon-26.jpg")} />
      </TouchableOpacity>
     </View>
   );
  }
}


// export default ({ navigation }) => (
  
// );
export default UserProfile