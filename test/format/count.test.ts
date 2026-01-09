import {
  formatCount,
  formatCountShortly,
} from '../../src/format/count'

test('formatCount', () => {

  expect(formatCount(100)).toBe('100')
  expect(formatCount(1000)).toBe('1,000')
  expect(formatCount(10000)).toBe('10,000')

  expect(formatCount(100, '份')).toBe('100份')
  expect(formatCount(1000, '')).toBe('1,000')
  expect(formatCount(10000, '个')).toBe('10,000个')

  expect(formatCountShortly(1000000000000, '个')).toBe('1万亿个')
  expect(formatCountShortly(1100000000000, '个')).toBe('1.1万亿个')
  expect(formatCountShortly(1110000000000, '个')).toBe('1.1万亿个')
  expect(formatCountShortly(1000000000, '个')).toBe('10亿个')
  expect(formatCountShortly(100000000, '个')).toBe('1亿个')
  expect(formatCountShortly(110000000, '个')).toBe('1.1亿个')
  expect(formatCountShortly(111000000, '个')).toBe('1.1亿个')
  expect(formatCountShortly(100000, '个')).toBe('10万个')
  expect(formatCountShortly(10000, '个')).toBe('1万个')
  expect(formatCountShortly(11000, '个')).toBe('1.1万个')
  expect(formatCountShortly(11100, '个')).toBe('1.1万个')
  expect(formatCountShortly(1000, '个')).toBe('1000个')
  expect(formatCountShortly(1000)).toBe('1000')

})