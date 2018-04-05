const solution = require('../solution')

const constant = 'abcdefghijklmnopqrstuvwxyz'

test('test set up working', () => {
  expect(true).toBeTruthy
})

test('decipher example One', () => {
  let cipher = 'zodvqukgwefbyitmrsplhacxnj'
  let actual = solution.decipher('dzs', cipher)
  let expected = 'car'
  expect(actual).toBe(expected)
})

test('decipher example Two', () => {
  let cipher = 'xipmuzfkbrlwotjancqgveshdy'
  let actual = solution.decipher('skd qj qucbjvq?', cipher)
  let expected = 'why so serious?'
  expect(actual).toBe(expected)
})
