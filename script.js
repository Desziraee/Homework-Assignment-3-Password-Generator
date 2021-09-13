// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables

var passwordText
var includeLowercase
var includeUppercase
var includeNumbers
var includeSpecialCharacters

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

//Propmpt & Confirms


// Write password to the #password input
function generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters) {
  console.log(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters)

  var pwd = "";
  let userChoice = []
  if (includeUppercase) {
    userChoice = userChoice.concat(upperCasedCharacters);
    pwd += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  }
  if (includeLowercase) {
    userChoice = userChoice.concat(lowerCasedCharacters)
    pwd += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
  }
  if (includeNumbers) {
    userChoice = userChoice.concat(numericCharacters)
    pwd += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  }
  if (includeSpecialCharacters) {
    userChoice = userChoice.concat(specialCharacters)
    pwd += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

  for (var i = pwd.length; i < passwordLength; i++) {
    pwd += userChoice[Math.floor(Math.random() * userChoice.length)];
  }
  return pwd
}

function writePassword() {

  passwordLength = prompt("How many characters would you like for your password?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 8 and 128");
    return;
  }

  includeLowercase = confirm("Would you like to include lowercase letters in your password?")

  includeUppercase = confirm("Would you like to include uppercase letters in your password?")

  includeNumbers = confirm("Would you like to include numbers in your password?")

  includeSpecialCharacters = confirm("Would you like to special characters in your password?")

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Please select an option");
    return;
  }

  var password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters);
  passwordText = document.getElementById("password");
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





