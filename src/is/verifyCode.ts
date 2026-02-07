/**
 * 是否为验证码，长度为 6 位
 *
 * @param value
 * @returns
 */
export function isVerifyCode(value: string) {
  return /^\d{6}$/.test(value)
}