import {
  getStringLength,
  trimString,
  sliceString,
  truncateString,
  renderStringTemplate,
  encodeURIComponent,
} from '../../src/index'

test('getStringLength', () => {

  expect(getStringLength("1234")).toBe(4)
  expect(getStringLength("1234你")).toBe(5)
  expect(getStringLength("1234你好")).toBe(6)

})

test('trimString', () => {

  expect(trimString("	1234")).toBe('1234')
  expect(trimString(" 1234")).toBe('1234')
  expect(trimString("	 1234")).toBe('1234')

  expect(trimString("1234	")).toBe('1234')
  expect(trimString("1234 ")).toBe('1234')
  expect(trimString("1234	 ")).toBe('1234')

  expect(trimString("	1234	 ")).toBe('1234')
  expect(trimString(`	1234
    `)).toBe('1234')
  expect(trimString(`
    1234
    `)).toBe('1234')

})

test('sliceString', () => {

  expect(sliceString("12345678", 4, 6)).toBe('56')
  expect(sliceString("1234你好", 3, 5)).toBe('4你')
  expect(sliceString("1234你好5", 5, 7)).toBe('好5')
  expect(sliceString("1234你好", 4, 6)).toBe('你好')

})

test('sliceString', () => {

  expect(sliceString("12345678", 4, 6)).toBe('56')
  expect(sliceString("1234你好", 3, 5)).toBe('4你')
  expect(sliceString("1234你好5", 5, 7)).toBe('好5')
  expect(sliceString("1234你好", 4, 6)).toBe('你好')

})

test('truncateString', () => {

  expect(truncateString("123456789", 5)).toBe('12...')
  expect(truncateString("ABCDEFGHI", 5)).toBe('AB...')
  expect(truncateString("ABC你好呀", 5)).toBe('AB...')
  expect(truncateString("你好呀ABC", 5)).toBe('你好...')
  expect(truncateString("你是谁你在干什么你想吃什么", 9)).toBe('你是谁你在干...')
  expect(truncateString("你是谁你在干ABC想吃什么", 9)).toBe('你是谁你在干...')

})

test('renderStringTemplate', () => {

  expect(renderStringTemplate('你好，${name}', { name: '张三' })).toBe('你好，张三')
  expect(renderStringTemplate('你好，${name1}，${name2}', { name1: '张三', name2: '李四' })).toBe('你好，张三，李四')
  expect(renderStringTemplate('你好，${name1}，${name3}。', { name1: '张三' })).toBe('你好，张三，${name3}。')
  expect(renderStringTemplate('你好，${value}。', { value: 10 })).toBe('你好，10。')
  expect(renderStringTemplate('你好，${value}。', { value: 10.11 })).toBe('你好，10.11。')
  expect(renderStringTemplate('你好，${value}。', { value: true })).toBe('你好，true。')
  expect(renderStringTemplate('你好，${value}。', { value: false })).toBe('你好，false。')
  expect(renderStringTemplate('你好，${value}。', { value: undefined })).toBe('你好，${value}。')

})

test('encodeURIComponent', () => {
  expect(encodeURIComponent(`key=123 啊啊+-*/_.!~()'`)).toBe(`key%3D123%20%E5%95%8A%E5%95%8A%2B-*%2F_.!~()'`)
})

test('decodeURIComponent', () => {
  expect(decodeURIComponent(`key%3D123%20%E5%95%8A%E5%95%8A%2B-*%2F_.!~()'`)).toBe(`key=123 啊啊+-*/_.!~()'`)
})