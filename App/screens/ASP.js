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
  Alert
} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
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
class ASP extends React.Component{
  
//   state = {
//     SAP: ""
//   }

//   updateSAP = (SAP) =>
//       this.setState({SAP:SAP})

state = {
  AllergyOptions:[
    'Sugar',
    'Soybean',
    'Egg','Wheat',
    'Tree Nut',
    'Potato Starch',
    'Corn',
    'Red Meat',
  ],

  Asp:[
    'Sensivity',
    'Allergy',
  ],

  text1: '',
  text2: '',
  SAP: '',
}

  

   render(){
    sendData = () =>{
      // Store data from dropdown to be sent to the database 
      // iData = ingredeint data 
      // asData 
      iData = this.state.text1;
      asData = this.state.text2;
      
      exports.iData = iData;
      exports.asData = asData;
    
      }
    

   return(
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




<View style ={styles.container}>
    <View>
      <Text style = {{fontWeight:"bold",fontSize:35,padding:20,fontFamily:'HelveticaNeue-Italic',color:'#3bde26', alignSelf:"stretch"}}style = {{fontWeight:"bold",fontSize:35,padding:20,fontFamily:'HelveticaNeue-Italic',color:'#3bde26', alignSelf:"stretch"}}>Revel ASP</Text>
    </View>
    <View style ={styles.container2}>
    <View style = {{justifyContent:'flex-start',padding:10,
                    height: 40,
                    width:160,
                    borderRadius:10,
                    backgroundColor : '#3bde26',
                    marginRight:15,
                    marginTop :20}}>
    <ModalDropdown options = {AllergyOptions}
    // {['Penut','Seafood','Gluten','Dairy',
    //                             'Sugar','Soybean','Egg','Wheat','Tree Nut','Potato Starch','Corn','Red Meat']} 
                                defaultValue = "Select Ingredient" textStyle= {{fontSize:18}} 
                                dropdownStyle ={{width:150}} 
                                dropdownTextStyle = {{fontSize:14}} 
                                onSelect = {(value) => this.setState({text1: (String(this.state.AllergyOptions[value]))})}
                                 />
    </View>
    <View style = {{justifyContent:"flex-end",paddingBottom:10, 
                    height: 40,
                    width:160,
                    borderRadius:10,
                    backgroundColor : "#3bde26",
                    marginTop:20,
                    marginLeft :15,
                    alignItems:"center"}}>
    <ModalDropdown options = {Sap}
      //  ['Sensivity','Allergy']
                   showsVerticalScrollIndicator={true} defaultValue = 'Category'  textStyle= {{fontSize:18}} 
                   dropdownStyle ={{width:100,alignItems:'center'}}
                   dropdownTextStyle = {{fontSize:14}} 
                   onSelect = {(value) => this.setState({text2: (String(this.state.AllergyOptions[value]))})}
                    />
  </View>
   </View>
   <TouchableOpacity style = {styles.button} 
    onPress={() => {
      {this.sendData}
      
    }}><Text style = {{textAlign:"center", paddingTop:15,fontSize:30}}>Submit</Text></TouchableOpacity>
   </View>


  );
  

     
  }
}


// export default ({ navigation }) => (
  
// );


export default ASP
