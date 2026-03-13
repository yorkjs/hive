import {
  isCorporateAccountNumber
} from '../../src/index'

test('isCorporateAccountNumber', () => {

  expect(isCorporateAccountNumber('')).toBe(false)
  expect(isCorporateAccountNumber('1')).toBe(false)
  expect(isCorporateAccountNumber('12')).toBe(false)
  expect(isCorporateAccountNumber('6228480012123123123123123345678')).toBe(false)
  expect(isCorporateAccountNumber('1234567890123')).toBe(true)
  expect(isCorporateAccountNumber('asdasdasdasd')).toBe(false)

})
