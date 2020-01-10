
var userInput;
var psswd;
var email; 
valid = false;



function userNameEntryAuthentify(userName){
    for(var i = 0; i <= userName.lenght; i++){
        if(typeof charAt(i) == 'number'){
            valid = true;
        }
        else{
            valid = false;
        }
    }
}

