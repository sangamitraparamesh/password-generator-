const passwordDisplay = document.getElementById("passwordDisplay");

function generatePassword() {
  let length = document.getElementById("length").value;
  let includeLower = document.getElementById("lowercase").checked;
  let includeUpper = document.getElementById("uppercase").checked;
  let includeNumbers = document.getElementById("numbers").checked;
  let includeSymbols = document.getElementById("symbols").checked;

  let lowerChars = "abcdefghijklmnopqrstuvwxyz";
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numberChars = "0123456789";
  let symbolChars = "!@#$%^&*()_+[]{}<>?/|";

  let allChars = "";
  let password = "";

  if (includeLower) allChars += lowerChars;
  if (includeUpper) allChars += upperChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  if (allChars === "") {
    alert("Please select at least one option!");
    return;
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  passwordDisplay.value = password;
}

function copyPassword() {
  if (passwordDisplay.value !== "") {
    passwordDisplay.select();
    document.execCommand("copy");
    alert("Password copied!");
  }
}
