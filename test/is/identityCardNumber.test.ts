import {
  isIdentityCardNumber
} from '../../src/index'

test('isIdentityCardNumber', () => {

  expect(isIdentityCardNumber('')).toBe(false)
  expect(isIdentityCardNumber('1')).toBe(false)
  expect(isIdentityCardNumber('12')).toBe(false)
  expect(isIdentityCardNumber('464561561561651')).toBe(false)

})
