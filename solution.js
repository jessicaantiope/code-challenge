module.exports = {
  decipher: decipher
}

const constant = 'abcdefghijklmnopqrstuvwxyz'
const constantArray = constant.split('')

function decipher(encryptedText, cipher) {
  let cipherArray = cipher.split('')
  let result = encryptedText.split('').map((character) => {
    if (!constantArray.includes(character)) {
      return character
    }
    let index = cipherArray.indexOf(character)
    return constantArray[index]
  })
  return result.join('')
}

console.log('the solution to the problem is: ', decipher('knlfgnb, sj koqj o yvnewju', 'oephjizkxdawubnytvfglqsrcm'))