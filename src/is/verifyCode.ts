/**
 * 是否为验证码，长度为 6 位
 *
 * @group Function
 * @category Is
 * @param value 要校验的字符串
 * @returns 是否为验证码
 * @example
 * isUrl('112233') // true
 */
export function isVerifyCode(value: string) {
  return /^\d{6}$/.test(value)
}