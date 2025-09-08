import {
  isInteger
} from '../../src/is/number'

test('isStandardBarcode', () => {

  expect(isInteger(1)).toBe(true)
  expect(isInteger(1.0)).toBe(true)
  expect(isInteger(1.1)).toBe(false)

})
