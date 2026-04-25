import {
  getStringLength,
  getStringWidth,
  trimString,
  sliceString,
  truncateString,
  padStringStart,
  hasSpecialCharacter,
  removeSpecialCharacter,
  renderStringTemplate,
} from '../../src/index'

test('getStringLength', () => {

  expect(getStringLength("1234")).toBe(4)
  expect(getStringLength("1234你")).toBe(5)
  expect(getStringLength("1234你好")).toBe(6)

})
test('getStringWidth', () => {

  expect(getStringWidth("12")).toBe(2)
  expect(getStringWidth("12A")).toBe(3)
  expect(getStringWidth("12Aa")).toBe(4)
  expect(getStringWidth("12Aa啊")).toBe(6)
  expect(getStringWidth("12Aa啊_")).toBe(7)
  expect(getStringWidth("12Aa啊_，")).toBe(9)
  expect(getStringWidth("12Aa啊_，。")).toBe(11)

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

test('padStringStart', () => {

  expect(padStringStart('1', 3)).toBe('001')
  expect(padStringStart('12', 3)).toBe('012')
  expect(padStringStart('123', 3)).toBe('123')

})

test('hasSpecialCharacter', () => {

  expect(hasSpecialCharacter('abc,[1]23. 你好，【世界】！')).toBe(false)
  expect(hasSpecialCharacter('abc,123. \t\n')).toBe(true)
  expect(hasSpecialCharacter('abc,123.☺️')).toBe(true)
  expect(hasSpecialCharacter(' abc,  123. ')).toBe(false)
  expect(hasSpecialCharacter('a+b')).toBe(false)
  expect(hasSpecialCharacter('a-b')).toBe(false)
  expect(hasSpecialCharacter('a/b')).toBe(false)
  expect(hasSpecialCharacter('a*b')).toBe(false)
  expect(hasSpecialCharacter('茶π')).toBe(false)
  expect(hasSpecialCharacter('𰻝𰻝面')).toBe(false)

})

test('removeSpecialCharacter', () => {

  expect(removeSpecialCharacter('abc,[1]23. 你好，【世界】！')).toBe('abc,[1]23. 你好，【世界】！')
  expect(removeSpecialCharacter('abc,123.\t\n')).toBe('abc,123.')
  expect(removeSpecialCharacter('a☺️bc,☺️123.^456☺️%')).toBe('abc,123.456%')
  expect(removeSpecialCharacter('a☺️bc，123。☺️')).toBe('abc，123。')
  expect(removeSpecialCharacter(' abc,  123. ')).toBe(' abc,  123. ')
  expect(removeSpecialCharacter(' +-*/ ')).toBe(' +-*/ ')
  expect(removeSpecialCharacter('茶π')).toBe('茶π')
  expect(removeSpecialCharacter('𰻝𰻝面')).toBe('𰻝𰻝面')

})