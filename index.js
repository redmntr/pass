// Array of characters for generating passwords
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

// Function to generate a random password of given length
function generateRandomPassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Function to generate passwords and update UI
function generatePasswords() {
    let passwordLengthInput = document.getElementById("password-length");
    let passwordLength = parseInt(passwordLengthInput.value);

    let password1El = document.getElementById("password1-el");
    let password2El = document.getElementById("password2-el");

    // Generate passwords of specified length
    let password1 = generateRandomPassword(passwordLength);
    let password2 = generateRandomPassword(passwordLength);

    // Update HTML content
    password1El.textContent = password1;
    password2El.textContent = password2;
}


let password1El = document.getElementById("password1-el")
password1El.addEventListener("click", function() {
    let textToCopy = password1El.textContent

    navigator.clipboard.writeText(textToCopy)
    alert("Password copied to clipboard !")
})

let password2El = document.getElementById("password2-el")
password2El.addEventListener("click", function() {
    let textToCopy = password2El.textContent

    navigator.clipboard.writeText(textToCopy)
    alert("Password copied to clipboard !")
})
