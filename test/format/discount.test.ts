import {
  formatDiscount,
} from '../../src/format/discount'

test('formatDiscount', () => {

  expect(formatDiscount(8000)).toBe('8折')
  expect(formatDiscount(8800)).toBe('8.8折')
  expect(formatDiscount(8880)).toBe('8.8折') // 保留 1 位小数

})