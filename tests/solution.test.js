const solution = require('../solution')

const constant = 'abcdefghijklmnopqrstuvwxyz'

test('test set up working', () => {
  expect(true).toBeTruthy
})

test('decipher', () => {
  let actual = solution.decipher('dzs')
  let expected = 'car'
  expect(actual).toBe(expected)
})

