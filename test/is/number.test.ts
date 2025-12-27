import {
  isInteger
} from '../../src/is/number'

test('isInteger', () => {

  expect(isInteger(1)).toBe(true)
  expect(isInteger(1.0)).toBe(true)
  expect(isInteger(1.1)).toBe(false)

})
