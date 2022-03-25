// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

password = 10

reader.question("Welcome, please enter a 10 digit password!", function(input){
	tokens = input.split(' ');
	
    if (password >= 10){
        console.log("Success!")
    }else if (password <= 10){
        console.log("Failure")
    }
    

    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
