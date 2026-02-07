import {
  isVerifyCode
} from '../../src/is/verifyCode'

test('isVerifyCode', () => {

  expect(isVerifyCode('111222')).toBe(true)
  expect(isVerifyCode('11122')).toBe(false)
  expect(isVerifyCode('1112222')).toBe(false)
  expect(isVerifyCode('11122a')).toBe(false)
  expect(isVerifyCode('aaaaaa')).toBe(false)
  expect(isVerifyCode('')).toBe(false)

})
