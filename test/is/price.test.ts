import {
  isPrice
} from '../../src/is/price'

test('isPrice', () => {

  expect(isPrice('0')).toBe(true)
  expect(isPrice('1')).toBe(true)
  expect(isPrice('1.0')).toBe(true)
  expect(isPrice('1.1')).toBe(true)
  expect(isPrice('1.12')).toBe(true)
  expect(isPrice('123.12')).toBe(true)
  expect(isPrice('1.123')).toBe(false)
  expect(isPrice('+1')).toBe(false)
  expect(isPrice('-1')).toBe(false)
  expect(isPrice('abc')).toBe(false)
  expect(isPrice('1.')).toBe(false)
  expect(isPrice('')).toBe(false)

})
