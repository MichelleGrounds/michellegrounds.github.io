(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.cesarcipher = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
