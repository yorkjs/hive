import {
  formatMoney,
} from '../../src/format/money'

test('formatMoney', () => {

  expect(formatMoney(1000000)).toBe('10,000.00')
  expect(formatMoney(1000000, 1)).toBe('10,000.0')
  expect(formatMoney(1000000, 0)).toBe('10,000')
  expect(formatMoney(1000, 2)).toBe('10.00')

})