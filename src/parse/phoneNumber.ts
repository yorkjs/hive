import { PHONE_NUMBER_MOBILE, PHONE_NUMBER_LANDLINE, PHONE_NUMBER_400 } from '../constant/phoneNumber'

/// 解析电话号码
export function parsePhoneNumber(value: string) {
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