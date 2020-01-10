// import { TextInput } from 'react-native';

// export default function UselessTextInput() {
//     const [value, onChangeText] = React.useState('Useless Placeholder');


var userInput = prompt("User Name: ","dhymes16");
var psswd;
var email; 
valid = false;



function userNameEntryAuthentify(userName){
 
    while(valid === false){
        // Checks to see if userName contains a number; 
        for(var i = 0; i <= userName.lenght; i++){
            if(typeof charAt(i) == 'number'){
                valid = true;
                console.log("Good")
          }
          else{
             valid = false;
             }
         }
         
    }
}

userNameEntryAuthentify(userInput);
