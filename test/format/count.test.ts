import {
  formatCount,
} from '../../src/format/count'

test('formatCount', () => {

  expect(formatCount(100)).toBe('100')
  expect(formatCount(1000)).toBe('1,000')
  expect(formatCount(10000)).toBe('10,000')

  expect(formatCount(100, '份')).toBe('100份')
  expect(formatCount(1000, '')).toBe('1,000')
  expect(formatCount(10000, '个')).toBe('10,000个')

})