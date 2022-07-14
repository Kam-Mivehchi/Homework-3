// Assignment Code
var generateBtn = document.querySelector("#generate");


var rotate = function (nums, k) {

  let n = nums.splice(nums.length - k)
  // splice the last n characters
  let lastNums = nums.splice((nums.length - k));
  //add to begining of old array
  console.log(n)
  nums.splice(0, 0, ...n)
  console.log(nums)

};
rotate([1, 2, 3, 4, 5, 6, 7], 3)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function to generate a random string
function generatePassword() {
  var myPassword = [];
  var lowerAlph = "abcdefghijklmnopqrstuvwxyz".split(",");
  var upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(",");
  var number = "1234567890".split(",");
  var symbols = "!@#$%^&*()_+=-}{][|~`><?".split(",");
  var characterSet = [];


  //prompt user for password length and convert that input to integer
  var passLength = prompt("how many charactrs would you like in your password(8-120 max)", "Enter Value here");
  var passLengthValue = parseInt(passLength);

  //validate input
  if (passLengthValue > 120 || passLengthValue < 8) {
    alert("Please Enter a Value between 8-120");
    return "Please Enter a Value between 8-120";
  }

  var wantCap = confirm("Press OK if you would like Capital letters in your password");
  var wantLower = confirm("Press OK if you would like lowers letters in your password");
  var wantNumbers = confirm("Press OK if you would like Numbers in your password");
  var wantSymbols = confirm("Press OK if you would like Symbols in your password");

  //Input Validation if user denies all characters
  if (!wantCap && !wantSymbols && !wantLower && !wantNumbers) {
    alert("Please Accept at least one criteria");
    return "Please Accept at least one criteria";
  }
  // if at least one condition is accepted the following will create a character set based on user criteria
  if (wantCap) {
    characterSet += upperAlph;
  }
  if (wantSymbols) {
    characterSet += symbols;
  }
  if (wantLower) {
    characterSet += lowerAlph;
  }
  if (wantNumbers) {
    characterSet += number;
  }


  //retrieves random character and appends to password
  for (var i = 0; i < passLengthValue; i++) {
    myPassword[i] = characterSet[Math.floor(Math.random() * characterSet.length)];

  }
  //join array as a string without commas, return that string

  return myPassword.join("");
}
//if input is not valid the function returns to screen and tells user to enter a valid function



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
