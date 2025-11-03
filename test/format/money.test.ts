import {
  formatAmount,
  formatPenny,
} from '../../src/format/money'

test('formatAmount', () => {

  expect(formatAmount(1000)).toBe('10.00元')
  expect(formatAmount(1230)).toBe('12.30元')
  expect(formatAmount(1234)).toBe('12.34元')

})

test('formatPenny', () => {

  expect(formatPenny(80)).toBe('0.080元')
  expect(formatPenny(81)).toBe('0.081元')
  expect(formatPenny(181)).toBe('0.181元')

})