// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // var character = lowercase + uppercase + numeric +special 
  // let promtLength = i;
  // for  ( var i = 8; i < 129; i++) {
  //   password = Math.floor((Math.random()*i.character);
  // }

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});

function generatePassword() {

  //prompt length of password
  var promptLength = parseInt(window.prompt('Please choose the lenght of password, need to be at least 8 characters and no more than 128 characters'));
  if (promptLength < 8 || promptLength > 128 || isNaN(promptLength)){
    return "Invalid length...please enter a number between 8 and 128"
  }


  //ask for character types
  var useChoiceCharacters = ""

  //Lowercase
  var promptLower = window.confirm('Would you like to include lowercase letters? Click "OK" for yes');
  if (promptLower===true) {
    //var confirmLower = window.confirm("You chose to include lowercase letters.");
    useChoiceCharacters += "qwertyuiopasdfghjklzxcvbnm";
  }

  
  //Uppercase
  var promptUpper = window.confirm('Would you like to include uppercase letters? Click "OK" for yes');
  if (promptUpper === true) {
    
   useChoiceCharacters += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }

 
  //Numeric
  var promptNumeric = window.confirm('Would you like to include numeric characters? Click "OK" for yes');
  if (promptNumeric === true) {
  
    useChoiceCharacters += "1234567890";
  }

  

  //Special Character
  var promptSpecial = window.confirm('Would you like to include special characters? Click "OK" for yes');
  if (promptSpecial === true) {
    
    useChoiceCharacters += "`~!@#$%^&*()-_=+[]\{}|;:',./<>?";
  }
  
  if ( useChoiceCharacters.length == 0) {
    return "Please choose at least one option."
  }
var password = ""
for(let i=1;i<=promptLength;i++){
  var index = Math.floor(Math.random() * useChoiceCharacters.length) 
  password += useChoiceCharacters[index]
}
console.log (password)



}