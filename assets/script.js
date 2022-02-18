// variables for special characters, letters, and numbers
var specialCharacters = ['!' ,'#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var upperCase = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//Prompt for choosing password length.

function passwordPrompt() {
    var passwordLength;
    function chooseLength() {
    var passwordLength = window.prompt('Choose the length of your password by selecting an integer between 8 and 128. This will determine your password length.');
         if (passwordLength >= 8 && passwordLength <= 128) {
             alert("you chose a length of " + passwordLength + " characters.");
        } else {
            alert("you need to choose an integer between 8 and 128!")
            chooseLength(); 
        }
           function characterPrompt() {
           //Instructions for this step
           var specialCharacterPrompt = window.confirm("Please choose at least one of the following four special character criteria to be included in your password.")
           //Special Characters
           var specialPrompt = window.confirm("Do you want a special character included in your password?");
           //Upper Case
           var upperCasePrompt = window.confirm("Do you want an upper case letter included in your password?");
           //Lower Case
           var lowerCasePrompt = window.confirm("Do you want a lower case letter included in your password?");
           //Numbers
           var numberPrompt = window.confirm("Do you want numbers included in your password?");

           //If user did not meet criteria, show alert and direct them back to beginning.
           if (specialPrompt === false && upperCasePrompt === false && lowerCasePrompt === false && numberPrompt === false) {
    
           alert('You did not choose the required amount of prompts special characters. Please choose at least one.')
           characterPrompt();
         };
         
        
               // communication between the special characters, letters, and numbers and the variable prompts.
               var passwordChoices = {
               lowercase: lowerCasePrompt,
               uppercase: upperCasePrompt,
               numbers: numberPrompt,
               special: specialPrompt,
               length: passwordLength
               };

               // calls array at beginning and uses to come up with various array password combinations.
               var array;
               var array = []
               if (lowerCasePrompt) {
               array.push(...(lowerCase))
               }
               if (upperCasePrompt) {
               array.push(...(upperCase))
               }
               if (specialPrompt) {
               array.push(...(specialCharacters))
               }
               if (numberPrompt) {
               array.push(...(numbers))
               }

               function shuffle(array) {
               let currentIndex = array.length, randomIndex;

               
               while (currentIndex != 0) {

               
               randomIndex = Math.floor(Math.random() * currentIndex);
               currentIndex--;

               
               [array[currentIndex], array[randomIndex]] = 
               [array[randomIndex], array[currentIndex]];
               }

                return array;
               }
             

               shuffle(array);
                  array.length = passwordLength


                return array;



                };
          return characterPrompt();

              };

    return chooseLength();
    }



// Get references to the #generate element
var generateBtn = document.querySelector('#generate')
generateBtn.addEventListener('click', writePassword)


function writePassword() {
  var password = passwordPrompt();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);