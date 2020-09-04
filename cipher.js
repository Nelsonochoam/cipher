/*
* This exercise should take no more than 45 minutes
*
* We want to be able to encrypt and decrypt messages.
* Original messages to be encrypted do not contain numbers.
* We encrypt by a simple protocol that is based on character mapping as shown below.
* Encryption and decryption happens by replacing vowels by numbers and viceversa
*
* example: codes = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5}
*
* Your tasks are:
* - based on the criteria explained above, write a function that encrypt/decrypt messages.
* - provide some tests to verify that the function works as expected.
* - mention any assumption you make to solve the problem.
*
* examples of input/output:
* input = "t3s 3s 1 m2ss1g2."
* output = "this is a message."
*
* input = "another message here!"
* output = "1n4th2r m2ss1g2 h2r2!"
*/


class Cipher {

  constructor() {
    this.encryptCodes = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 }
    this.decryptCodes = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }
  }


  process(message) {
    let result = []

    for (let i = 0; i < message.length; i++) {
      result.push(this._tranformChar(message[i]))
    }

    return result.join('')
  }

  _tranformChar(char) {
    if (this.encryptCodes[char]) {
      return this._encryptChar(char)
    }

    if (this.decryptCodes[char]) {
      return this._decryptChar(char)
    }

    return char
  }

  _encryptChar(char) {
    return this.encryptCodes[char]
  }

  _decryptChar(char) {
    return this.decryptCodes[char]
  }
}

module.exports = Cipher