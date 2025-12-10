import { AUTH_CODE_ALIPAY, AUTH_CODE_WECHAT } from '../../src/constant/authCode'
import {
  parseAuthCode,
} from '../../src/parse/authCode'

test('parseAuthCode', () => {

  expect(parseAuthCode('133619858964803511')).toBe(AUTH_CODE_WECHAT)
  expect(parseAuthCode('283654147086344711')).toBe(AUTH_CODE_ALIPAY)
  expect(parseAuthCode('583654147086344711')).toBe(-1)
  expect(parseAuthCode('C69241878121')).toBe(-1)

})