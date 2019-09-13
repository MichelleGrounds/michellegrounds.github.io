function decodeCipher(str) {

  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var alphabetArray = alphabet.split("")
  var cipherArray = []
  var stringAsArray = str.toUpperCase().split("")

  for (var i = 0; i < stringAsArray.length; i++) {
    var alphabetMatch = alphabetArray.findIndex(function(match){
      return match == stringAsArray[i]
    });
    alphabetMatch == -1
      ? cipherArray.push(stringAsArray[i])
      : cipherArray.push(alphabetArray[alphabetMatch+13])
  };
  return cipherArray.join("");
};

function passInfoToHTML(){
    var str = document.getElementById('inputField').value
    document.getElementById('resultsField').innerHTML = decodeCipher(str);
}


module.exports.decodeCipher = decodeCipher
module.exports.passInfoToHTML = passInfoToHTML
