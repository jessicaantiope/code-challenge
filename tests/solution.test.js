const solution = require('../solution')

const constant = 'abcdefghijklmnopqrstuvwxyz'

test('test set up working', () => {
  expect(true).toBeTruthy
})

test('decipher', () => {
  let cipher = 'zodvqukgwefbyitmrsplhacxnj'
  let actual = solution.decipher('dzs', cipher)
  let expected = 'car'
  expect(actual).toBe(expected)
})

