import React from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style ={{color :'#3bde26', fontWeight: 'bold', textAlign:'center',fontSize:60,paddingBottom: 30, fontFamily:'HelveticaNeue-Italic'}}>Revel</Text>
      <Text style = {{color:'#3bde26',fontFamily:'HelveticaNeue-Italic'}}>Username:</Text>
      <View style = {{backgroundColor:'#3bde26',width:230}}>
      <TextInput style = {{borderBottomColor:"#000",height:30}}/>
      </View>
       <Text style = {{color:'#3bde26',fontFamily:'HelveticaNeue-Italic'}}>Password:</Text>
       <View style = {{backgroundColor:'#3bde26',width:230}}>
       <TextInput style = {{borderBottomColor:"#000",height:30}}/> 
       </View>
       <View>
      <Button title = "Log-in" style = {styles.buttonStyle}/>
      <Button title ="Sign-Up" style ={styles.buttonStyle}/>
      </View>
      </View>
    </View>
  );
}

function onPressLogIn(){
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  buttonStyle:{
    color:'#000',
    borderColor:'#000',
    textAlign: 'center',
  },
  textInputStyle:{
    borderRadius:40,
    borderColor:'#000000',
    padding:20,
    height:30
    
 
  },
  topText:{
    alignContent: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    
  },
  middleText:{
    padding: 350,
    justifyContent: 'center',
  }

});
