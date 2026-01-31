import {
  truncateString,
} from '../../src/util/string'

test('truncateString', () => {

  expect(truncateString("123456789", 5)).toBe('12...')
  expect(truncateString("ABCDEFGHI", 5)).toBe('AB...')
  expect(truncateString("ABC你好呀", 5)).toBe('AB...')
  expect(truncateString("你好呀ABC", 5)).toBe('你好...')
  expect(truncateString("你是谁你在干什么你想吃什么", 9)).toBe('你是谁你在干...')
  expect(truncateString("你是谁你在干ABC想吃什么", 9)).toBe('你是谁你在干...')

})