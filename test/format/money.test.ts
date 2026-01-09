import {
  formatAmount,
  formatAmountShortly,
  formatPenny,
} from '../../src/format/money'

test('formatAmount', () => {

  expect(formatAmount(1000)).toBe('10.00元')
  expect(formatAmount(1230)).toBe('12.30元')
  expect(formatAmount(1234)).toBe('12.34元')

  expect(formatAmountShortly(100000000000000)).toBe('1万亿元')
  expect(formatAmountShortly(110000000000000)).toBe('1.1万亿元')
  expect(formatAmountShortly(111000000000000)).toBe('1.1万亿元')
  expect(formatAmountShortly(100000000000)).toBe('10亿元')
  expect(formatAmountShortly(10000000000)).toBe('1亿元')
  expect(formatAmountShortly(11000000000)).toBe('1.1亿元')
  expect(formatAmountShortly(11100000000)).toBe('1.1亿元')
  expect(formatAmountShortly(10000000)).toBe('10万元')
  expect(formatAmountShortly(1000000)).toBe('1万元')
  expect(formatAmountShortly(1100000)).toBe('1.1万元')
  expect(formatAmountShortly(1110000)).toBe('1.1万元')
  expect(formatAmountShortly(1000)).toBe('10元')
  expect(formatAmountShortly(1000, '')).toBe('10')

})

test('formatPenny', () => {

  expect(formatPenny(80)).toBe('0.080元')
  expect(formatPenny(81)).toBe('0.081元')
  expect(formatPenny(181)).toBe('0.181元')

})