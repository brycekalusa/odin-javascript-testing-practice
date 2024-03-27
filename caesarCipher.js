function caesarCipher(string, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let newString = "";
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== " ") {
        let index = alphabet.indexOf(string[i]);
        newString += alphabet[(index + key) % 26];
      } else {
        newString += " ";
      }
    }
  
    return newString;
}
  
module.exports = caesarCipher;