import { PHONE_NUMBER_MOBILE, PHONE_NUMBER_LANDLINE, PHONE_NUMBER_400 } from '../../src/constant/phoneNumber'
import {
  parsePhoneNumber,
} from '../../src/parse/phoneNumber'

test('parsePhoneNumber', () => {

  expect(parsePhoneNumber('15812347890')).toBe(PHONE_NUMBER_MOBILE)
  expect(parsePhoneNumber('01088427865')).toBe(PHONE_NUMBER_LANDLINE)
  expect(parsePhoneNumber('010-88427865')).toBe(PHONE_NUMBER_LANDLINE)
  expect(parsePhoneNumber('091288427865')).toBe(PHONE_NUMBER_LANDLINE)
  expect(parsePhoneNumber('0912-87654321')).toBe(PHONE_NUMBER_LANDLINE)
  expect(parsePhoneNumber('4008997651')).toBe(PHONE_NUMBER_400)
  expect(parsePhoneNumber('400-899-7651')).toBe(PHONE_NUMBER_400)
  expect(parsePhoneNumber('40089976512')).toBe(-1)
  expect(parsePhoneNumber('C69241878121')).toBe(-1)

})