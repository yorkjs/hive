import {
  formatAmount,
} from '../../src/format/money'

test('formatAmount', () => {

  expect(formatAmount(1000)).toBe('10.00元')
  expect(formatAmount(1230)).toBe('12.30元')
  expect(formatAmount(1234)).toBe('12.34元')

})