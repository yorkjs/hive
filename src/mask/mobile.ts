/**
 * 脱敏手机号
 *
 * @group Function
 * @category Mask
 * @param mobile 手机号
 * @returns 脱敏后的手机号
 * @example
 * maskMobile('13800138000') // '138****8000'
 */
export function maskMobile(mobile: string) {
  if (mobile.length === 11) {
    return mobile.substring(0, 3) + "****" + mobile.substring(7)
  }
  return mobile
}