import {
  formatBankCardNumber,
} from '../../src/format/bankCard'

test('formatCount', () => {

  expect(formatBankCardNumber('9879764467646788')).toBe('9879 7644 6764 6788')
  expect(formatBankCardNumber('98797644676467881')).toBe('9879 7644 6764 6788 1')
  expect(formatBankCardNumber('987976446764678812')).toBe('9879 7644 6764 6788 12')
  expect(formatBankCardNumber('9879764467646788123')).toBe('9879 7644 6764 6788 123')
  expect(formatBankCardNumber('98797644676467881234')).toBe('9879 7644 6764 6788 1234')
  expect(formatBankCardNumber('987976446764678812345')).toBe('9879 7644 6764 6788 1234 5')

})