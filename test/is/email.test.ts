import {
  isEmail
} from '../../src/is/email'

test('isEmail', () => {

  expect(isEmail('abc@xxx.com')).toBe(true)
  expect(isEmail('a@163.com')).toBe(true)
  expect(isEmail('abc@qq.com')).toBe(true)
  expect(isEmail('abc@qq.cn')).toBe(true)
  expect(isEmail('abc@qq.com.cn')).toBe(true)
  expect(isEmail('abc@qq.net')).toBe(true)
  expect(isEmail('abc-123@qq.net')).toBe(true)
  expect(isEmail('abc-123qq.net')).toBe(false)
  expect(isEmail('abc-123@qq')).toBe(false)
  expect(isEmail('@qq')).toBe(false)
  expect(isEmail('@qq.com')).toBe(false)
  expect(isEmail('中文@qq.com')).toBe(false)

})
