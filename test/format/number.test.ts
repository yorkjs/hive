import {
  formatNumberWithComma,
} from '../../src/format/number'

test('formatNumberWithComma', () => {

  expect(formatNumberWithComma(-228.80, 2)).toBe('-228.80')
  expect(formatNumberWithComma(1000000)).toBe('1,000,000')
  expect(formatNumberWithComma(1000000.981, 2)).toBe('1,000,000.98')
  expect(formatNumberWithComma(10000, 1)).toBe('10,000.0')
  expect(formatNumberWithComma(10000, 0)).toBe('10,000')
  expect(formatNumberWithComma(10, 2)).toBe('10.00')


  expect(formatNumberWithComma(1234567.89)).toBe('1,234,567');
  expect(formatNumberWithComma(1234567.89, 0)).toBe('1,234,567');
  expect(formatNumberWithComma(1234567.89, 3)).toBe('1,234,567.890');
  expect(formatNumberWithComma(1234567.89, 5)).toBe('1,234,567.89000');

})