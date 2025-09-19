import {
  discountToDisplay,
  discountToBackend,
} from '../../src/convert/discount'

test('discount_convert', () => {

  expect(discountToDisplay(8000)).toBe(8)
  expect(discountToDisplay(8800)).toBe(8.8)
  expect(discountToDisplay(8880)).toBe(8.8) // 保留一位小数

  expect(discountToBackend(8)).toBe(8000)
  expect(discountToBackend(8.8)).toBe(8800)
  expect(discountToBackend(8.88)).toBe(8800)  // 保留一位小数

})
