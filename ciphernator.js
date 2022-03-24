

function caesarEncrypt(message, shift) {
  var encryptedMessage = ""
  message = message.toLowerCase();
  shift = shift % 26
  for(var i = 0; i < message.length; i++){
      var newLetter = message[i]
      var letterCode = message[i].charCodeAt(0)
      if (letterCode >= 97 && letterCode <= 122){
        letterCode = letterCode + shift
        if (letterCode > 122){
          letterCode = letterCode - 26
        }
        if (letterCode < 97){
          letterCode = letterCode + 26
        }
      }
      encryptedMessage = encryptedMessage + String.fromCharCode(letterCode);
    }
return (encryptedMessage)
}

function caesarDecrypt(message, shift) {
  shift *= -1
  return(caesarEncrypt(message, shift))
}

function displayEncrypt() {
  var encryptMessage = caesarEncrypt(document.getElementById("messageInput").value, document.getElementById("shiftInput").value)
  document.getElementById("output").innerHTML = encryptMessage
}

function displayDecrypt() {
  var decryptMessage = caesarDecrypt(document.getElementById("messageInput").value, document.getElementById("shiftInput").value)
  document.getElementById("output").innerHTML = decryptMessage
}
