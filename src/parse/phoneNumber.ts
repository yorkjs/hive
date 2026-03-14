import { PHONE_NUMBER_MOBILE, PHONE_NUMBER_LANDLINE, PHONE_NUMBER_400 } from '../constant/phoneNumber'

/**
 * 解析电话号码
 *
 * @group Function
 * @category Parse
 * @param value 电话号码字符串
 * @returns 如果是手机号码，返回 PHONE_NUMBER_MOBILE；如果是固定电话，返回 PHONE_NUMBER_LANDLINE；如果是400电话，返回 PHONE_NUMBER_400；否则返回 -1
 */
export function parsePhoneNumber(value: string): number {
  // 手机号码
  if (/^1\d{10}$/.test(value)) {
    return PHONE_NUMBER_MOBILE
  }

  // 固定电话
  if (/^0\d{9,11}$/.test(value)
    || /^0\d{2,3}-\d{7,8}$/.test(value)
  ) {
    return PHONE_NUMBER_LANDLINE
  }

  // 400 电话
  if (/^400\d{7}$/.test(value)
    || /^400-\d{3}-\d{4}$/.test(value)
  ) {
    return PHONE_NUMBER_400
  }

  return -1
}