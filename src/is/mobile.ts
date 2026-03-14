import { PHONE_NUMBER_MOBILE } from '../constant/phoneNumber'
import { parsePhoneNumber } from '../parse/phoneNumber'

/**
 * 是否为手机号码
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否为手机号码
 * @example
 * isMobile('13512345678') // true
 * isMobile('123') // false
 */
export function isMobile(value: string) {
  return parsePhoneNumber(value) === PHONE_NUMBER_MOBILE
}