import {
  isBankCardNumber
} from '../../src/index'

test('isBankCardNumber', () => {

  expect(isBankCardNumber('')).toBe(false)
  expect(isBankCardNumber('1')).toBe(false)
  expect(isBankCardNumber('12')).toBe(false)
  expect(isBankCardNumber('6228480012345678')).toBe(false)
  expect(isBankCardNumber('1234567890123')).toBe(false)

})
