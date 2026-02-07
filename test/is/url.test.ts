import {
  isUrl
} from '../../src/is/url'

test('isUrl', () => {

  expect(isUrl('')).toBe(false)
  expect(isUrl('https://www.baidu.com')).toBe(true)
  expect(isUrl('http://www.baidu.com')).toBe(true)
  expect(isUrl('htt://www.baidu.com')).toBe(false)
  expect(isUrl('ftp://www.baidu.com')).toBe(false)
  expect(isUrl('https://www.baidu.com/')).toBe(true)
  expect(isUrl('https://www.baidu.com/a')).toBe(true)
  expect(isUrl('https://www.baidu.com/a/b')).toBe(true)
  expect(isUrl('https://www.baidu.com/a/b/c')).toBe(true)
  expect(isUrl('https://www.baidu.com/a/b/c?a=1')).toBe(true)
  expect(isUrl('https://www.baidu.com/a/b/c?a=1&b=2')).toBe(true)
  expect(isUrl('https://www.baidu.com/a/b/c?a=1&b=2#hash')).toBe(true)

})
